import {EVENT_TYPE} from "./utils";
import {LOGGER} from "../core/utils";
import {NoSessionError} from "../core/errors/nosession_error";
import {SessionOpenError} from "../core/errors/sessionopen_error";


export default class LeyaEvents {

    apiClient = null;

    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async recordPageView() {

        if (await Leya.isSessionOpen()) {

            let s = await Leya.getSession();
            let u = await Leya.getUser();

            let pv = {
                session: s.id,
                host: s.host,
                path: s.path,
                referrer: s.referrer,
                recorded_at: new Date().getTime(),
                device: u.device,
                blan: u.browserLanguage,
                gdprc: u.gdpr.consented,
                gdprvl: u.gdpr.vendorListVersion,
                tags: Leya.getTags()
            };

            let data = {
                type: EVENT_TYPE.PAGE_VIEW,
                data: [pv]
            };

            LOGGER.debug("Recording page view event " + JSON.stringify(data));

            //send event using api client
            return this.apiClient.sendEvent(data);
        }
        else {
            LOGGER.error("No session");
            throw new NoSessionError();
        }
    }

    async recordSession() {

        let s = await Leya.getSession();
        let u = await Leya.getUser();

        if (s === null) {
            LOGGER.error("No session");
            throw new NoSessionError();
        }

        if (s.finish === null) {
            LOGGER.error("Session is still open");
            throw new SessionOpenError();
        }

        let session = {
            session: s.id,
            host: s.host,
            path: s.path,
            referrer: s.referrer,
            start: s.start,
            finish: new Date().getTime(),
            device: u.device,
            blan: u.browserLanguage,
            gdprc: u.gdpr.consented,
            gdprvl: u.gdpr.vendorListVersion,
            tags: Leya.getTags()
        };

        let data = {
            type: EVENT_TYPE.SESSION,
            data: [session]
        };

        LOGGER.debug("Recording session closed event " + JSON.stringify(data));

        //send event using api client
        return this.apiClient.sendEvent(data);
    }

}