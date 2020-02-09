import Prebid from "./prebid/prebid"
import LeyaEvents from "./leya";
import {LeyaClient} from "../api/lc";
import {LOGGER} from "../core/utils";

(function (window) {
    const fint = 1000; //flush interval
    const bs = 1; //batch size

    let lc = new LeyaClient(fint, bs);
    let p = new Prebid(lc);
    let l = new LeyaEvents(lc);

    lc.scheduleFlush()
        .then(() => LOGGER.info("Scheduled flush"));

    //init
    let _handleAuctionEvent = (e) => p.handleAuctionEvent(e);
    let _handleImpressionEvent = (e) => p.handleImpressionEvent(e);
    let _handleBidAfterTimeoutEvent = (e) => p.handleBidAfterTimeoutEvent(e);
    let _recordPageView = () => l.recordPageView();
    let _recordSession = () => l.recordSession();

    window.Leya = Object.assign({}, window.Leya, {
        Events:
            {
                Prebid: {
                    handleAuctionEvent: _handleAuctionEvent,
                    handleImpressionEvent: _handleImpressionEvent,
                    handleBidAfterTimeoutEvent: _handleBidAfterTimeoutEvent
                },
                recordPageView: _recordPageView,
                recordSession: _recordSession
            }
    });

})(window);