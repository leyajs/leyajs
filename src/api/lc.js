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

    async sendEvent(event, flush) {
        this.events.push(event);

        if (flush) {
            await this.flush(true);
        } else {
            if (this.events.length > this.batchSize) {
                await this.flush(false);
            }
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

    async flush(useBeacon) {
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
                        if (navigator.sendBeacon && useBeacon) {
                            //if beacon exists, use it
                            this.beacon(k, payload);
                        }
                        else {
                            //fallback to axios
                            //https://caniuse.com/#search=sendBeacon
                            this.axios(k, payload);
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

    beacon(key, payload) {
        let blob = new Blob([JSON.stringify(payload)], {type: 'text/plain; charset=UTF-8'});
        if (!navigator.sendBeacon(DEFAULT_HOST + '?xat=' + key, blob)) {
            //beacon failed, fallback to axios
            LOGGER.debug("failed to queue beacon request, falling back to axios");
            this.axios(key, payload);
        }
    }

    axios(key, payload) {
        Axios.post(DEFAULT_HOST, JSON.stringify(payload), {
            headers: {
                'Content-Type': 'application/json',
                'x-api-token': key
            }
        });
        //todo requeue failed requests
    }
}


