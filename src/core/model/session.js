export class Session {
    id = null;
    host = null;
    path = null;
    referrer = null;
    _start = null;
    _finish = null;

    constructor(id) {
        this.host = window.location.hostname;
        this.path = window.location.pathname;
        this.referrer = document.referrer;
        this._start = new Date().getTime();
        this.id = id;
    }

    get start() {
        return this._start;
    }

    get finish() {
        return this._finish;
    }

    set finish(value) {
        this._finish = value;
    }
}
