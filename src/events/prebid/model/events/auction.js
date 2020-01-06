import {AdUnit} from "../adunit";

export class Auction {

    _session = null;
    _host = null;
    _path = null;
    _referrer = null;
    _device = null;
    _gdprc = null;
    _tags = [];

    _id = null;
    _timeout = null;
    _start = null;
    _finish = null;
    _adunits = [];


    get session() {
        return this._session;
    }

    set session(value) {
        this._session = value;
    }

    get host() {
        return this._host;
    }

    set host(value) {
        this._host = value;
    }

    get path() {
        return this._path;
    }

    set path(value) {
        this._path = value;
    }

    get referrer() {
        return this._referrer;
    }

    set referrer(value) {
        this._referrer = value;
    }

    get device() {
        return this._device;
    }

    set device(value) {
        this._device = value;
    }

    get gdprc() {
        return this._gdprc;
    }

    set gdprc(value) {
        this._gdprc = value;
    }

    get tags() {
        return this._tags;
    }

    set tags(value) {
        this._tags = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
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

    get adunits() {
        return this._adunits;
    }

    set adunits(value) {
        this._adunits = value;
    }

    static from(ae) {

        let a = new Auction();

        a.id = ae.id;
        a.timeout = ae.timeout;
        a.start = ae.start;
        a.finish = ae.finish;

        if (ae.gdpr_consent) {
            a.gdprc = ae.gdpr_consent;
        }

        let adunits = [];

        Object.keys(ae.adUnits).forEach(au => adunits.push(AdUnit.from(ae.adUnits[au])));

        a.adunits = adunits;

        return a;
    }
}

