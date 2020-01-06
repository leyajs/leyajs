import {Bidder} from './bidder';

export class AdUnit {

    _id = null;
    _status = null;
    _timeout = null;
    _start = null;
    _finish = null;

    _bidders = [];

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get timeout() {
        return this._timeout;
    }

    set timeout(value) {
        this._timeout = value;
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

    get bidders() {
        return this._bidders;
    }

    set bidders(value) {
        this._bidders = value;
    }

    static from(adu) {
        let ad = new AdUnit();

        ad.id = adu.adUnitPath || adu.adUnit;
        ad.status = adu.status;
        ad.timeout = adu.timeout;
        ad.start = adu.start;
        ad.finish = adu.finish;

        let bidders = [];

        Object.keys(adu.bidders).forEach(b => bidders.push(Bidder.from(adu.bidders[b])));

        ad.bidders = bidders;

        return ad;
    }
}