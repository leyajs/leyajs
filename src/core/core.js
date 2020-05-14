"use strict";

import {Session, User} from "./model/index";
import {LOGGER, Utils} from "./utils"
import { v4 as uuid } from 'uuid';
import {SessionOpenError} from "./errors/sessionopen_error";
import {NoSessionError} from "./errors/nosession_error";

export default class Core {
    session = null;
    user = null;
    tags = null;
    key = null;

    constructor() {
        //set default user details
        this.user = (new User(Utils.getDeviceType(), Utils.getBrowserLanguage()));
        this.tags = [];
    }

    async setKey(key) {
        this.key = key;
    }

    async getKey() {
        return this.key;
    }

    async startSession() {
        //no previous session, create first
        if (this.session === null) {

            this.session = new Session(uuid());

            LOGGER.debug("Started new session " + this.session.id);
        } else {

            //session exists and is still open
            if (this.session.finish === null) {
                LOGGER.error("A session is already open, close it before starting a new one");
                throw new SessionOpenError();
            }

            //previous session is closed, we can open a new one
            this.session = new Session(uuid());

            LOGGER.debug("Started new session " + this.session.id);
        }

        return this.getSession();
    }

    async finishSession() {
        //there is a session
        if (this.session !== null) {
            //if it's still open
            if (this.session.finish === null) {
                LOGGER.debug("Ending session " + this.session.id);

                this.session.finish = new Date().getTime();

                //record session
                return Leya.Events.recordSession();
            } else {
                LOGGER.warn("Session already closed at " + this.session.finish);
            }
        } else {
            LOGGER.error("No session, start one first");
            throw new NoSessionError();
        }
    }

    async setTags(tags) {
        if (!tags) {
            throw new Error("array argument is required");
        }

        if (Array.isArray(tags)) {
            this.validateTags(tags);
            if (tags.length % 2 === 0) {
                tags = tags.map(function (x) {
                    return x.toLowerCase()
                });
                this.tags = tags;

                return this.getTags();
            } else {
                throw new Error("array argument requires pair size, two elements for each key, value pair: ['key1', 'value1', 'key2', 'value2']")
            }
        } else {
            throw new Error("array argument is required");
        }
    }

    async getTags() {
        return this.tags;
    }

    async getSession() {
        return Object.assign({}, this.session);
    }

    async getUser() {
        return Object.assign({}, this.user);
    }

    async setUserGdprConsent(c) {
        this.user.gdpr.consented = c;

        return this.getSession();
    }

    async setGdprVendorListVersion(v) {
        this.user.gdpr.vendorListVersion = v;

        return this.getSession();
    }

    async isSessionOpen() {
        return this.session !== null && this.session.finish === null;
    }

    async addTags(ntags) {
        if (!ntags) {
            throw new Error("array argument is required");
        }

        if (Array.isArray(ntags)) {
            this.validateTags(ntags);
            if (ntags.length % 2 === 0) {
                ntags = ntags.map(function (x) {
                    return x.toLowerCase()
                });

                ntags.forEach(function (val, i) {
                    if (i % 2 === 0) {
                        const ci = this.tags.indexOf(val);
                        if (ci >= 0) {
                            //update key
                            this.tags[ci + 1] = ntags[i + 1];
                        } else {
                            //add key val
                            this.tags = this.tags.concat(ntags);
                        }
                    }
                }.bind(this));
            } else {
                throw new Error("array argument requires pair size, two elements for each key, value pair: ['key1', 'value1', 'key2', 'value2']")
            }
        } else {
            throw new Error("array argument is required");
        }
    }

    async removeTags(rt) {
        if (!rt) {
            throw new Error("argument is required");
        }

        rt = [].concat(rt);

        rt.forEach(function (t) {
            const ci = this.tags.indexOf(t);
            if (ci >= 0 && ci % 2 === 0) {
                this.tags.splice(ci, 2);
            }
        }.bind(this));
    }

    validateTags(tags) {
        tags = [].concat(tags);
        tags.forEach(e => {
            this.isValidTag(e);
        })
    }

    isValidTag(e) {
        if (!(typeof e === 'number' || typeof e === 'string')) {
            throw new Error("invalid tag '" + e + "'");
        }
    }
}