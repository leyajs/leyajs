import Axios from 'axios'
import {LOGGER} from "../core/utils";

const DEFAULT_HOST = 'https://analytics.leya.tech/events';

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

        if(this.events.length > this.batchSize) {
            await this.flush();
        }
    }

    async getEventQueueSize() {
        return this.events.length;
    }

    async flush() {
        let k = await Leya.getKey();

        const headers = {
            'Content-Type': 'application/json',
            'x-api-token': k
        };

        if (this.flushTimeoutId) {
            clearTimeout(this.flushTimeoutId);
            this.flushTimeoutId = null;
        }

        try {
            if(k) {
                while (this.events.length) {
                    let d = this.events.splice(0, this.batchSize);

                    LOGGER.debug("Flushing " + d.length + " events");

                    if (d.length) {
                        let payload = {};

                        d.forEach(e => {
                            payload[e.type] = payload[e.type] || [];
                            payload[e.type] = payload[e.type].concat(e.data);
                        });

                        LOGGER.info(JSON.stringify(payload));

                        return await Axios.post(DEFAULT_HOST, JSON.stringify(payload), {headers: headers});
                    }
                }
            }
        } finally {
            await this.scheduleFlush();
        }
    }
}


