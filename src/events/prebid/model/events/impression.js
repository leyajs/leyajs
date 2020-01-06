import {Bidder} from "../bidder";

export class Impression {

    _session = null;
    _host = null;
    _path = null;
    _referrer = null;
    _device = null;
    _gdprc = null;
    _tags = [];

    _ad_unit = null;
    _winner = null;
    _cpm = null;
    _media_type = null;
    _size = null;

    _auction_start = null;
    _auction_finish = null;
    _timeout = null;
    _auction_id = null;
    _status = null;

    _bidders = [];

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

    get ad_unit() {
        return this._ad_unit;
    }

    set ad_unit(value) {
        this._ad_unit = value;
    }

    get winner() {
        return this._winner;
    }

    set winner(value) {
        this._winner = value;
    }

    get cpm() {
        return this._cpm;
    }

    set cpm(value) {
        this._cpm = value;
    }

    get media_type() {
        return this._media_type;
    }

    set media_type(value) {
        this._media_type = value;
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }

    get auction_start() {
        return this._auction_start;
    }

    set auction_start(value) {
        this._auction_start = value;
    }

    get auction_finish() {
        return this._auction_finish;
    }

    set auction_finish(value) {
        this._auction_finish = value;
    }

    get timeout() {
        return this._timeout;
    }

    set timeout(value) {
        this._timeout = value;
    }

    get auction_id() {
        return this._auction_id;
    }

    set auction_id(value) {
        this._auction_id = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get bidders() {
        return this._bidders;
    }

    set bidders(value) {
        this._bidders = value;
    }

    static from(impression) {

        let i = new Impression();

        i.ad_unit = impression.adUnitPath || impression.adUnit;
        i.winner = impression.bidder;
        i.cpm = impression.cpm;
        i.media_type = impression.mediaType;

        if (impression.size.width && impression.size.height) {
            i.size = impression.size.width + 'x' + impression.size.height;
        }

        i.auction_id = impression.auction.id;
        i.gdprc = impression.auction.gdpr_consent;
        i.auction_start = impression.auction.start;
        i.auction_finish = impression.auction.finish;
        i.status = impression.auction.status;
        i.timeout = impression.auction.timeout;

        let bidders = [];

        Object.keys(impression.auction.bidders).forEach(b => bidders.push(Bidder.from(impression.auction.bidders[b])));

        i.bidders = bidders;

        return i;
    }
}

