import {Gdpr} from "./gdpr";

export class User {
    device = null;
    browserLanguage = null;
    gdpr = null;

    constructor(device, browserLanguage) {
        this.device = device;
        this.browserLanguage = browserLanguage;

        this.gdpr = new Gdpr();
    }

}
