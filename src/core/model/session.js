export class Session {
    id = null;
    host = null;
    path = null;
    referrer = null;
    start = null;
    finish = null;

    constructor(id) {
        this.host = window.location.hostname;
        this.path = window.location.pathname;
        this.referrer = document.referrer;
        this.start = new Date().getTime();
        this.finish = null;
        this.id = id;
    }

}
