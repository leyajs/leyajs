import Axios from 'axios'
import {LOGGER} from "../core/utils";

const DEFAULT_HOST = 'https://analytics.leya.tech/events';
const A9_LINE_ITEMS_URL = "https://analytics.leya.tech/a9/line-items";

export class LeyaClient {

    events = [];
    flushTimeoutId = null;

    flushTimeout = null;
    batchSize = null;

    constructor(flushTimeout, batchSize) {
        this.flushTimeout = flushTimeout;
        this.batchSize = batchSize;
    }

    async scheduleFlush() {
        this.flushTimeoutId = setTimeout(this.flush.bind(this), this.flushTimeout);
    }

    async sendEvent(event) {
        this.events.push(event);

        if (this.events.length > this.batchSize) {
            await this.flush();
        }
    }

    async getA9LineItemsMap() {
        let k = await Leya.getKey();

        if (k) {
            return Axios.get(A9_LINE_ITEMS_URL, {
                headers: {
                    'x-api-token': k
                }
            });
        } else {
            LOGGER.warn("Can't retrieve line item map without an ingestion key, use Leya.setKey() to set yours.");
        }
    }

    async getEventQueueSize() {
        return this.events.length;
    }

    async flush() {
        let k = await Leya.getKey();

        if (this.flushTimeoutId) {
            clearTimeout(this.flushTimeoutId);
            this.flushTimeoutId = null;
        }

        try {
            while (this.events.length) {
                let d = this.events.splice(0, this.batchSize);

                LOGGER.debug("Flushing " + d.length + " events");

                if (d.length) {
                    let payload = {};

                    d.forEach(e => {
                        payload[e.type] = payload[e.type] || [];
                        payload[e.type] = payload[e.type].concat(e.data);
                    });

                    LOGGER.debug(JSON.stringify(payload));

                    if (k) {
                        if (navigator.sendBeacon) {
                            //if beacon exists, use it
                            let blob = new Blob([JSON.stringify(payload)], {type: 'text/plain; charset=UTF-8'});
                            navigator.sendBeacon(DEFAULT_HOST + '?xat=' + k, blob);
                        }
                        else {
                            //fallback to axios
                            //https://caniuse.com/#search=sendBeacon
                            //in this case it's highly likely that there will be no session events
                            Axios.post(DEFAULT_HOST, JSON.stringify(payload), {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'x-api-token': k
                                }
                            });
                        }
                    } else {
                        LOGGER.warn("missing ingestion key");
                    }
                }
            }
        } finally {
            await this.scheduleFlush();
        }
    }
}


