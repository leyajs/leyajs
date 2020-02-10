import {Bidder} from "../bidder";

export class BidAfterTimeout {

    _session = null;
    _host = null;
    _path = null;
    _referrer = null;
    _device = null;
    _gdprc = null;
    _tags = [];

    _ad_unit = null;
    _cpm = null;
    _bidder = null;
    _bidder_start = null;
    _bidder_finish = null;
    _media_type = null;
    _size = null;

    _auction_id = null;
    _auction_start = null;
    _auction_finish = null;
    _status = null;
    _timeout = null;

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

    get cpm() {
        return this._cpm;
    }

    set cpm(value) {
        this._cpm = value;
    }

    get bidder() {
        return this._bidder;
    }

    set bidder(value) {
        this._bidder = value;
    }

    get bidder_start() {
        return this._bidder_start;
    }

    set bidder_start(value) {
        this._bidder_start = value;
    }

    get bidder_finish() {
        return this._bidder_finish;
    }

    set bidder_finish(value) {
        this._bidder_finish = value;
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

    get auction_id() {
        return this._auction_id;
    }

    set auction_id(value) {
        this._auction_id = value;
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

    get bidders() {
        return this._bidders;
    }

    set bidders(value) {
        this._bidders = value;
    }

    static from(bidAfterTimeout) {

        let bat = new BidAfterTimeout();

        bat.ad_unit = bidAfterTimeout.adUnitPath || bidAfterTimeout.adUnit;
        bat.cpm = bidAfterTimeout.cpm;
        bat.bidder = bidAfterTimeout.bidder;
        bat.bidder_start = bidAfterTimeout.start;
        bat.bidder_finish = bidAfterTimeout.finish;
        bat.media_type = bidAfterTimeout.mediaType;

        if (bidAfterTimeout.size.width && bidAfterTimeout.size.height) {
            bat.size = bidAfterTimeout.size.width + 'x' + bidAfterTimeout.size.height;
        }

        bat.auction_id = bidAfterTimeout.auction.id;
        bat.gdprc = bidAfterTimeout.auction.gdpr_consent;
        bat.status = bidAfterTimeout.auction.status;
        bat.auction_start = bidAfterTimeout.auction.start;
        bat.auction_finish = bidAfterTimeout.auction.finish;
        bat.timeout = bidAfterTimeout.auction.timeout;

        let bidders = [];

        Object.keys(bidAfterTimeout.auction.bidders).forEach(b => bidders.push(Bidder.from(bidAfterTimeout.auction.bidders[b])));

        bat.bidders = bidders;

        return bat;
    }
}

