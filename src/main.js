import Core from "./core/core"
import {LOGGER} from "./core/utils";
import Prebid from "./events/prebid/prebid";
import LeyaEvents from "./events/leya";
import A9 from "./events/a9/a9";
import {LeyaClient} from "./api/lc";

(function (window) {

    if (window.Leya) {
        LOGGER.warn("Attempted to load leyajs but it's already loaded.");
        return;
    }

    //core
    let l = new Core();

    let _getKey = (key) => l.getKey(key);
    let _setKey = (key) => l.setKey(key);
    let _startSession = () => l.startSession();
    let _finishSession = () => l.finishSession();
    let _getSession = () => l.getSession();
    let _setTags = (tags) => l.setTags(tags);
    let _getTags = () => l.getTags();
    let _getUser = () => l.getUser();
    let _setUserGdprConsent = (g) => l.setUserGdprConsent(g);
    let _setGdprVendorListVersion = (v) => l.setGdprVendorListVersion(v);
    let _isSessionOpen = () => l.isSessionOpen();

    //events
    const fint = 1000; //flush interval
    const bs = 3; //batch size

    let lc = new LeyaClient(fint, bs);
    let p = new Prebid(lc);
    let le = new LeyaEvents(lc);
    let a9 = new A9(lc);

    //leya events
    let _recordPageView = () => le.recordPageView();
    let _recordSession = () => le.recordSession();

    //prebid events
    let _handleAuctionEvent = (e) => p.handleAuctionEvent(e);
    let _handleImpressionEvent = (e) => p.handleImpressionEvent(e);
    let _handleBidAfterTimeoutEvent = (e) => p.handleBidAfterTimeoutEvent(e);

    //a9 events
    let _init = () => a9.init();
    let _handleA9AuctionEvent = (e) => a9.handleAuctionEvent(e);
    let _handleA9ImpressionEvent = (e) => a9.handleImpressionEvent(e);
    let _getLineItemsMap = () => a9.getLineItemsMap();

    l.startSession()
        .then(() => LOGGER.info("Session Open"));

    lc.scheduleFlush()
        .then(() => LOGGER.info("Scheduled flush"));

    window.Leya = {
        getKey: _getKey,
        setKey: _setKey,
        startSession: _startSession,
        finishSession: _finishSession,
        getSession: _getSession,
        getTags: _getTags,
        setTags: _setTags,
        getUser: _getUser,
        setUserGdprConsent: _setUserGdprConsent,
        setGdprVendorListVersion: _setGdprVendorListVersion,
        isSessionOpen: _isSessionOpen,
        Events:
            {
                Prebid: {
                    handleAuctionEvent: _handleAuctionEvent,
                    handleImpressionEvent: _handleImpressionEvent,
                    handleBidAfterTimeoutEvent: _handleBidAfterTimeoutEvent
                },
                A9: {
                    handleAuctionEvent: _handleA9AuctionEvent,
                    handleImpressionEvent: _handleA9ImpressionEvent,
                    init: _init,
                    getLineItemsMap: _getLineItemsMap
                },
                recordPageView: _recordPageView,
                recordSession: _recordSession
            }
    };

    //event handlers
    window.addEventListener('load', async (event) => {
        //set consent f
        let f = async function (u) {
            if (u) {
                let details = u.gdpr.gdprDetails();

                if (details) {
                    await Leya.setUserGdprConsent(details.getConsentValue);
                    if (details.vendorList) {
                        await Leya.setGdprVendorListVersion(details.vendorList.vendorListVersion);
                    }
                }
            }
        };

        //get consent
        let u = await Leya.getUser();
        //set consent
        await f(u);

        //refresh consent
        window.setInterval(async function () {
            let u = await Leya.getUser();
            await f(u);
        }.bind(this), 250);

        //record page view
        await Leya.Events.recordPageView();
    });

    window.addEventListener('beforeunload', async (event) => {
        //attempt to close session
        await Leya.finishSession();

        delete event['returnValue'];

    });

})(window);