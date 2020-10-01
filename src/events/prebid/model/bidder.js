export class Bidder {

    _id = null;
    _bat = null;
    _status = null;
    _cpm = null;
    _start = null;
    _finish = null;
    _source = null;


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get bat() {
        return this._bat;
    }

    set bat(value) {
        this._bat = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get cpm() {
        return this._cpm;
    }

    set cpm(value) {
        this._cpm = value;
    }

    get start() {
        return this._start;
    }

    set start(value) {
        this._start = value;
    }

    get finish() {
        return this._finish;
    }

    set finish(value) {
        this._finish = value;
    }

    get source() {
        return this._source;
    }

    set source(value) {
        this._source = value;
    }

    static from(ade) {
        let b = new Bidder();

        b.id = ade.bidder;
        b.bat = ade.isAfterTimeout;
        b.status = ade.status;
        b.cpm = ade.cpm;
        b.start = ade.start;
        b.finish = ade.finish;
        b.source = ade.source;

        return b;
    }
}
