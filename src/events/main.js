import Prebid from "./prebid/prebid";
import LeyaEvents from "./leya";
import A9 from "./a9/a9";
import {LeyaClient} from "../api/lc";
import {LOGGER} from "../core/utils";

(function (window) {
    const fint = 1000; //flush interval
    const bs = 3; //batch size

    let lc = new LeyaClient(fint, bs);
    let p = new Prebid(lc);
    let l = new LeyaEvents(lc);
    let a9 = new A9(lc);

    lc.scheduleFlush()
        .then(() => LOGGER.info("Scheduled flush"));

    //leya events
    let _recordPageView = () => l.recordPageView();
    let _recordSession = () => l.recordSession();

    //prebid events
    let _handleAuctionEvent = (e) => p.handleAuctionEvent(e);
    let _handleImpressionEvent = (e) => p.handleImpressionEvent(e);
    let _handleBidAfterTimeoutEvent = (e) => p.handleBidAfterTimeoutEvent(e);

    //a9 events
    let _init = () => a9.init();
    let _handleA9AuctionEvent = (e) => a9.handleAuctionEvent(e);
    let _handleA9ImpressionEvent = (e) => a9.handleImpressionEvent(e);
    let _getLineItemsMap = () => a9.getLineItemsMap();

    window.Leya = Object.assign({}, window.Leya, {
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
    });

})(window);