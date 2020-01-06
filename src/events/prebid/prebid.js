"use strict";

import {LOGGER} from "../../core/utils";
import {NoSessionError} from "../../core/errors/nosession_error";
import {Auction} from "./model/events/auction";
import {Impression} from "./model/events/impression";
import {BidAfterTimeout} from "./model";
import {EVENT_TYPE} from "../utils";

export default class Prebid {

    apiClient = null;

    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async handleAuctionEvent(e) {
        if (await Leya.isSessionOpen()) {

            let s = await Leya.getSession();
            let u = await Leya.getUser();
            let tags = await Leya.getTags();

            LOGGER.debug("Handling Prebid Auction event on session " + s.id);

            let a = Auction.from(e);

            a.session = s.id;
            a.host = s.host;
            a.path = s.path;
            a.referrer = s.referrer;
            a.device = u.device;
            a.gdprc = a.gdprc || u.gdpr.consented;
            a.tags = this.sanitizeTags(tags);

            LOGGER.debug("Flattening auction event: " + JSON.stringify(a));

            let far = this.flattenAuction(a);

            LOGGER.debug("Flattened auction rows: " + JSON.stringify(far));

            let data = {
                type: EVENT_TYPE.PB_AUCTION,
                data: far
            };

            return this.apiClient.sendEvent(data);
        } else {
            LOGGER.error("No session");
            throw new NoSessionError();
        }
    };

    async handleImpressionEvent(e) {

        if (await Leya.isSessionOpen()) {

            let s = await Leya.getSession();
            let u = await Leya.getUser();
            let tags = await Leya.getTags();

            LOGGER.debug("Handling Prebid Impression event on session " + s.id);

            let i = Impression.from(e);

            i.session = s.id;
            i.host = s.host;
            i.path = s.path;
            i.referrer = s.referrer;
            i.device = u.device;
            i.gdprc = i.gdprc || u.gdpr.consented;
            i.tags = this.sanitizeTags(tags);

            LOGGER.debug("Flattening impression event: " + JSON.stringify(i));

            let fir = this.flattenImpression(i);

            LOGGER.debug("Flattened impression rows: " + JSON.stringify(fir));

            let data = {
                type: EVENT_TYPE.PB_IMPRESSION,
                data: fir
            };

            return this.apiClient.sendEvent(data);
        } else {
            LOGGER.error("No session");
            throw new NoSessionError();
        }
    };

    async handleBidAfterTimeoutEvent(e) {

        if (await Leya.isSessionOpen()) {

            let s = await Leya.getSession();
            let u = await Leya.getUser();
            let tags = await Leya.getTags();

            LOGGER.debug("Handling Prebid BidAfterTimeout event on session " + s.id);

            let bat = BidAfterTimeout.from(e);

            bat.session = s.id;
            bat.host = s.host;
            bat.path = s.path;
            bat.referrer = s.referrer;
            bat.device = u.device;
            bat.gdprc = bat.gdprc || u.gdpr.consented;
            bat.tags = this.sanitizeTags(tags);

            LOGGER.debug("Flattening BidAfterTimeout event: " + JSON.stringify(bat));

            let fbatr = this.flattenBidAfterTimeout(bat);

            LOGGER.debug("Flattened impression rows: " + JSON.stringify(fbatr));

            let data = {
                type: EVENT_TYPE.PB_BID_AFTER_TIMEOUT,
                data: fbatr
            };

            return this.apiClient.sendEvent(data);
        } else {
            LOGGER.error("No session");
            throw new NoSessionError();
        }
    };

    //private

    flattenBidAfterTimeout(bat) {
        let rows = [];

        bat.bidders.forEach(b => {
            rows.push({
                session: bat.session,
                host: bat.host,
                path: bat.path,
                device: bat.device,
                gdprc: bat.gdprc,
                tags: bat.tags,

                ad_unit: bat.ad_unit,
                bat_cpm: bat.cpm,
                bat_bidder: bat.bidder,
                bat_start: bat.bidder_start,
                bat_finish: bat.bidder_finish,
                media_type: bat.media_type,
                size: bat.size,

                auction_id: bat.auction_id,
                auction_start: bat.auction_start,
                auction_finish: bat.auction_finish,
                auction_timeout: bat.timeout,

                bidder_id: b.id,
                bidder_bid_after_timeout: b.bat,
                bidder_status: b.status,
                bidder_cpm: b.cpm,
                bidder_start: b.start,
                bidder_finish: b.finish
            });
        });

        return rows;
    }

    flattenImpression(i) {
        let rows = [];

        i.bidders.forEach(b => {
            rows.push({
                session: i.session,
                host: i.host,
                path: i.path,
                device: i.device,
                gdprc: i.gdprc,
                tags: i.tags,

                ad_unit: i.ad_unit,
                winner_cpm: i.cpm,
                winner_bidder: i.winner,
                media_type: i.media_type,
                size: i.size,

                auction_id: i.auction_id,
                auction_start: i.auction_start,
                auction_finish: i.auction_finish,
                auction_timeout: i.timeout,

                bidder_id: b.id,
                bidder_bid_after_timeout: b.bat,
                bidder_status: b.status,
                bidder_cpm: b.cpm,
                bidder_start: b.start,
                bidder_finish: b.finish
            });
        });

        return rows;
    }

    flattenAuction(a) {
        let rows = [];

        a.adunits.forEach(au => {
            au.bidders.forEach(b => {
                rows.push({
                    session: a.session,
                    host: a.host,
                    path: a.path,
                    device: a.device,
                    gdprc: a.gdprc,
                    tags: a.tags,

                    auction_id: a.id,
                    auction_timeout: a.timeout,
                    auction_start: a.start,
                    auction_finish: a.finish,

                    ad_unit_id: au.id,
                    ad_unit_status: au.status,
                    ad_unit_timeout: au.timeout,
                    ad_unit_bid_start: au.start,
                    ad_unit_bid_finish: au.finish,

                    bidder_id: b.id,
                    bidder_bid_after_timeout: b.bat,
                    bidder_status: b.status,
                    bidder_cpm: b.cpm,
                    bidder_start: b.start,
                    bidder_finish: b.finish
                });
            });
        });

        return rows;
    }

    sanitizeTags(tags) {
        if (Array.isArray(tags) && tags.length > 0 && (tags.length % 2) === 0) {
            let jo = {};

            for (let i = 0; i < tags.length; i += 2) {
                jo[tags[i].toLowerCase()] = tags[i + 1].toLowerCase();
            }

            const ordered = {};
            Object.keys(jo).sort().forEach(function (key) {
                ordered[key] = jo[key];
            });

            return Object.entries(ordered).flat();
        }

        return [];
    }

}