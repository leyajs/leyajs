"use strict";

import { v4 as uuid } from 'uuid';
import {LOGGER} from "../../core/utils";
import {NoSessionError} from "../../core/errors/nosession_error";
import {EmptyLineItemsMapError} from "../../core/errors/empty_line_items_map_error";
import {MissingRequiredPropertyError} from "../../core/errors/missing_required_property_error";
import {ApiError} from "../../core/errors/api_error";
import {EVENT_TYPE, Utils} from "../utils";

export default class A9 {

    apiClient = null;
    auctions = [];
    lineItemsMap = {};

    constructor(apiClient, auctionTtlInSeconds, intervalInSeconds) {
        this.apiClient = apiClient;

        setInterval(function () {
            let time = new Date().getTime();

            //remove auctions older than auctionTtlInMinutes minutes
            this.auctions = this.auctions.filter(function (e) {
                return time < e.time + (auctionTtlInSeconds * 1000);
            });

        }.bind(this), intervalInSeconds * 1000);
    }

    async init() {
        return this.apiClient.getA9LineItemsMap()
            .then(e => {
                if (e && e.data) {
                    this.lineItemsMap = e.data;
                    LOGGER.debug("A9 Line Items map: " + JSON.stringify(this.lineItemsMap));
                } else {
                    LOGGER.warn("Retrieved empty line items map, review configuration.");
                }
            })
            .catch(err => {
                LOGGER.error("API error fetching A9 Line Items Map", err);
                throw new ApiError();
            });
    }

    async getLineItemsMap() {
        return this.lineItemsMap;
    }

    async handleAuctionEvent(e) {

        if (await Leya.isSessionOpen()) {

            let s = await Leya.getSession();
            let u = await Leya.getUser();
            let tags = await Leya.getTags();

            LOGGER.debug("Handling A9 Auction event on session " + s.id);
            LOGGER.debug(e);

            //validate and enhance e.response
            this.validateAndEnhanceRawAuction(e);

            //{
            //  start:,
            //  finish:,
            //  response: [
            //      {
            //          slotID:,
            //          slotName:,
            //          amzniid:,
            //          amznbid:,
            //          amznp:,
            //          amznsz:,
            //          size,
            //          cpm
            //      }
            //  ]
            //}

            e.response.forEach(el => {
                el.auction_start = e.start;
                el.auction_finish = e.finish;
                el.session = s.id;
                el.host = s.host;
                el.path = s.path;
                el.referrer = s.referrer;
                el.device = u.device;
                el.gdprc = u.gdpr.consented || 3;
                el.gdprvl = u.gdpr.vendorListVersion;
                el.tags = Utils.sanitizeTags(tags);
            });

            this.auctions.push({
                data: e.response,
                time: new Date().getTime()
            });

            let data = {
                type: EVENT_TYPE.A9_AUCTION,
                data: e.response
            };

            return this.apiClient.sendEvent(data, false);
        } else {
            LOGGER.error("No session");
            throw new NoSessionError();
        }
    }

    async handleImpressionEvent(e) {

        if (await Leya.isSessionOpen()) {

            let s = await Leya.getSession();
            let u = await Leya.getUser();
            let tags = await Leya.getTags();

            LOGGER.debug("Handling A9 Impression event on session " + s.id);
            LOGGER.debug(e);

            this.validateAndEnhanceRawImpression(e);

            //find corresponding auction entry
            let ae = this.auctions
                .flatMap(el => el.data)
                .find(el => el.amzniid === e.amzniid && el.slotName === e.slotName && el.amznp === e.amznp && el.amznbid === e.amznbid);

            let i = {};

            i.session = s.id;
            i.host = s.host;
            i.path = s.path;
            i.referrer = s.referrer;
            i.device = u.device;
            i.gdprc = u.gdpr.consented || 3;
            i.gdprvl = u.gdpr.vendorListVersion;
            i.tags = Utils.sanitizeTags(tags);

            if (!ae) {
                LOGGER.warn("auction entry not found for impression: " + JSON.stringify(e));
                i.amzniid = e.amzniid;
                i.amznp = e.amznp;
                i.amznbid = e.amznbid;
                i.cpm = e.cpm;
                i.auction_start = new Date().getTime();
                i.auction_finish = new Date().getTime();
                i.slotID = "unknown";
                i.slotName = e.slotName;
                i.size = "unknown";
                i.amznsz = "unknown";
            } else {
                i.amzniid = ae.amzniid;
                i.amznp = ae.amznp;
                i.amznbid = ae.amznbid;
                i.cpm = ae.cpm;
                i.auction_start = ae.auction_start;
                i.auction_finish = ae.auction_finish;
                i.slotID = ae.slotID;
                i.slotName = ae.slotName;
                i.size = ae.size;
                i.amznsz = ae.amznsz;
            }

            let data = {
                type: EVENT_TYPE.A9_IMPRESSION,
                data: i
            };

            return this.apiClient.sendEvent(data, false);
        } else {
            LOGGER.error("No session");
            throw new NoSessionError();
        }
    }

    //private

    validateAndEnhanceRawImpression(data) {
        //{
        //  amzniid:,
        //  amznbid:,
        //  amznp,
        //  slotName
        //}

        if (!data.amzniid) {
            LOGGER.error("missing 'amzniid'");
            throw new MissingRequiredPropertyError();
        }

        if (!data.amznbid) {
            LOGGER.error("missing 'amznbid'");
            throw new MissingRequiredPropertyError();
        }

        if (!data.amznp) {
            LOGGER.error("missing 'amznp'");
            throw new MissingRequiredPropertyError();
        }

        if (!data.slotName) {
            LOGGER.error("missing 'slotName'");
            throw new MissingRequiredPropertyError();
        }

        data["cpm"] = this.amznbid2cpm(data.amznbid);
    }

    validateAndEnhanceRawAuction(data) {
        //{
        //  start:,
        //  finish:,
        //  request: [
        //      {
        //          slotID:,
        //          slotName:,
        //          sizes: []
        //      }
        //  ],
        //  response: [
        //      {
        //          slotID:,
        //          amzniid:,
        //          amznbid:,
        //          amznp:,
        //          amznsz:,
        //          size
        //      }
        //  ]
        //}

        if (!data.start) {
            data.start = new Date().getTime();
        }

        if (!data.finish) {
            data.finish = new Date().getTime();
        }

        if (Utils.emptyArray(data.request)) {
            LOGGER.error("A9 auction data missing request object");
            throw new MissingRequiredPropertyError();
        }

        if (Utils.emptyArray(data.response)) {
            LOGGER.error("A9 auction data missing response object");
            throw new MissingRequiredPropertyError();
        }

        //generate a random uuid in case amzniid is empty, happens when there is no bids from a9
        let bid = data.response.find(r => r.amzniid);
        let aid = bid ? bid.amzniid : uuid();

        data.response = data.response.map(e => {
            let req = data.request.find(r => r.slotID === e.slotID);

            e["amzniid"] = e["amzniid"] || aid;
            e["slotName"] = req.slotName;
            e["cpm"] = this.amznbid2cpm(e.amznbid);

            return e;
        });

        delete data.request;
    }

    amznbid2cpm(amznbid) {
        if (Object.entries(this.lineItemsMap).length === 0 && this.lineItemsMap.constructor === Object) {
            LOGGER.error("A9 Line Items Map is empty, call init() to retrieve it");
            throw new EmptyLineItemsMapError();
        }

        return this.lineItemsMap[amznbid] || 0;
    }
}