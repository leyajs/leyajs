import {AdUnit, Auction, BidAfterTimeout, Bidder, Impression} from "../../../../src/events/prebid/model";

test("it should map Prebid Impression event to Impression model", async () => {
    //Pb Impression Event
    const i = {
        adUnit: "ad_unit_1",
        cpm: 0.01,
        bidder: "bidder_1",
        mediaType: "banner",
        auction: {
            id: "test_auction",
            gdpr_consent: 1,
            status: "finished",
            timeout: 1200,
            start: 1234,
            finish: 1236,
            bidders: {
                "bidder_1": {
                    bidder: "bidder_1",
                    isAfterTimeout: 1,
                    status: "bid",
                    cpm: 0.01,
                    start: 1234,
                    finish: 1235
                }
            }
        }
    };

    //expected Impression
    const expected = new Impression();
    expected.auction_id = "test_auction";
    expected.cpm = 0.01;
    expected.winner = "bidder_1";
    expected.ad_unit = "ad_unit_1";
    expected.timeout = 1200;
    expected.auction_start = 1234;
    expected.auction_finish = 1236;
    expected.gdprc = 1;
    expected.status = "finished";
    expected.media_type = "banner";

    const expectedBidder = new Bidder();
    expectedBidder.id = "bidder_1";
    expectedBidder.bat = 1;
    expectedBidder.status = "bid";
    expectedBidder.cpm = 0.01;
    expectedBidder.start = 1234;
    expectedBidder.finish = 1235;

    expected.bidders = [expectedBidder];

    expect(JSON.stringify(Impression.from(i))).toBe(JSON.stringify(expected));
});

test("it should map Prebid Impression event to Impression model", async () => {
    //Pb Impression Event
    const i = {
        adUnitPath: "path",
        adUnit: "ad_unit_1",
        cpm: 0.01,
        bidder: "bidder_1",
        mediaType: "banner",
        size: {
            width: "1",
            height: "1",
        },
        auction: {
            id: "test_auction",
            gdpr_consent: 1,
            status: "finished",
            timeout: 1200,
            start: 1234,
            finish: 1236,
            bidders: {
                "bidder_1": {
                    bidder: "bidder_1",
                    isAfterTimeout: 1,
                    status: "bid",
                    cpm: 0.01,
                    start: 1234,
                    finish: 1235
                }
            }
        }
    };

    //expected Impression
    const expected = new Impression();
    expected.auction_id = "test_auction";
    expected.cpm = 0.01;
    expected.winner = "bidder_1";
    expected.ad_unit = "path";
    expected.timeout = 1200;
    expected.auction_start = 1234;
    expected.auction_finish = 1236;
    expected.gdprc = 1;
    expected.status = "finished";
    expected.media_type = "banner";
    expected.size = "1x1";

    const expectedBidder = new Bidder();
    expectedBidder.id = "bidder_1";
    expectedBidder.bat = 1;
    expectedBidder.status = "bid";
    expectedBidder.cpm = 0.01;
    expectedBidder.start = 1234;
    expectedBidder.finish = 1235;

    expected.bidders = [expectedBidder];

    expect(JSON.stringify(Impression.from(i))).toBe(JSON.stringify(expected));
});

test("it should map Prebid BidAfterTimeout event to BidAfterTimeout model", async () => {
    //Pb Bid After Timeout Event
    const bat = {
        adUnitPath: "path",
        adUnit: "ad_unit_1",
        cpm: 0.01,
        bidder: "bidder_1",
        start: 1234,
        finish: 1237,
        mediaType: "banner",
        size: {
            width: "1",
            height: "1",
        },
        auction: {
            id: "test_auction",
            gdpr_consent: 1,
            status: "bidAfterTimeout",
            timeout: 1200,
            start: 1234,
            finish: 1236,
            bidders: {
                "bidder_1": {
                    bidder: "bidder_1",
                    isAfterTimeout: 1,
                    status: "bid",
                    cpm: 0.01,
                    start: 1234,
                    finish: 1237
                }
            }
        }
    };

    //expected BidAfterTimeout
    const expected = new BidAfterTimeout();
    expected.auction_id = "test_auction";
    expected.cpm = 0.01;
    expected.bidder = "bidder_1";
    expected.bidder_start = 1234;
    expected.bidder_finish = 1237;
    expected.size = "1x1";
    expected.ad_unit = "path";
    expected.timeout = 1200;
    expected.auction_start = 1234;
    expected.auction_finish = 1236;
    expected.gdprc = 1;
    expected.status = "bidAfterTimeout";
    expected.media_type = "banner";

    const expectedBidder = new Bidder();
    expectedBidder.id = "bidder_1";
    expectedBidder.bat = 1;
    expectedBidder.status = "bid";
    expectedBidder.cpm = 0.01;
    expectedBidder.start = 1234;
    expectedBidder.finish = 1237;

    expected.bidders = [expectedBidder];

    expect(JSON.stringify(BidAfterTimeout.from(bat))).toBe(JSON.stringify(expected));
});

test("it should map Prebid BidAfterTimeout event to BidAfterTimeout model", async () => {
    //Pb Bid After Timeout Event
    const bat = {
        adUnit: "ad_unit_1",
        cpm: 0.01,
        bidder: "bidder_1",
        start: 1234,
        finish: 1237,
        mediaType: "banner",
        auction: {
            id: "test_auction",
            gdpr_consent: 1,
            status: "bidAfterTimeout",
            timeout: 1200,
            start: 1234,
            finish: 1236,
            bidders: {
                "bidder_1": {
                    bidder: "bidder_1",
                    isAfterTimeout: 1,
                    status: "bid",
                    cpm: 0.01,
                    start: 1234,
                    finish: 1237
                }
            }
        }
    };

    //expected BidAfterTimeout
    const expected = new BidAfterTimeout();
    expected.auction_id = "test_auction";
    expected.cpm = 0.01;
    expected.bidder = "bidder_1";
    expected.bidder_start = 1234;
    expected.bidder_finish = 1237;
    expected.ad_unit = "ad_unit_1";
    expected.timeout = 1200;
    expected.auction_start = 1234;
    expected.auction_finish = 1236;
    expected.gdprc = 1;
    expected.status = "bidAfterTimeout";
    expected.media_type = "banner";

    const expectedBidder = new Bidder();
    expectedBidder.id = "bidder_1";
    expectedBidder.bat = 1;
    expectedBidder.status = "bid";
    expectedBidder.cpm = 0.01;
    expectedBidder.start = 1234;
    expectedBidder.finish = 1237;

    expected.bidders = [expectedBidder];

    expect(JSON.stringify(BidAfterTimeout.from(bat))).toBe(JSON.stringify(expected));
});

test("it should map Prebid Auction event to Auction model", async () => {
    //Pb Auction Event
    const auction = {
        id: "test",
        timeout: 1200,
        start: 1234,
        finish: 1236,
        gdpr_consent: 1,
        adUnits: {
            "ad_unit_1": {
                adUnitPath: "path",
                adUnit: "ad_unit_1",
                status: "status",
                timeout: 1200,
                start: 1234,
                finish: 1236,
                adUnitSizes: ["1x1"],
                bidders: {
                    "bidder_1": {
                        bidder: "bidder_1",
                        isAfterTimeout: 0,
                        status: "bid",
                        cpm: 0.01,
                        start: 1234,
                        finish: 1235
                    }
                }
            }
        }
    };

    //expected Auction
    const expected = new Auction();
    expected.id = "test";
    expected.timeout = 1200;
    expected.start = 1234;
    expected.finish = 1236;
    expected.gdprc = 1;

    const expectedAdUnit = new AdUnit();
    expectedAdUnit.id = "path";
    expectedAdUnit.status = "status";
    expectedAdUnit.timeout = 1200;
    expectedAdUnit.start = 1234;
    expectedAdUnit.finish = 1236;
    expectedAdUnit.sizes = ["1x1"];

    const expectedBidder = new Bidder();
    expectedBidder.id = "bidder_1";
    expectedBidder.bat = 0;
    expectedBidder.status = "bid";
    expectedBidder.cpm = 0.01;
    expectedBidder.start = 1234;
    expectedBidder.finish = 1235;

    expectedAdUnit.bidders = [expectedBidder];
    expected.adunits = [expectedAdUnit];

    expect(JSON.stringify(Auction.from(auction))).toBe(JSON.stringify(expected));
});

test("it should map Prebid Auction event to Auction model", async () => {
    //Pb Auction Event
    const auction = {
        id: "test",
        timeout: 1200,
        start: 1234,
        finish: 1236,
        adUnits: {
            "ad_unit_1": {
                adUnit: "ad_unit_1",
                status: "status",
                timeout: 1200,
                start: 1234,
                finish: 1236,
                bidders: {
                    "bidder_1": {
                        bidder: "bidder_1",
                        isAfterTimeout: 0,
                        status: "bid",
                        cpm: 0.01,
                        start: 1234,
                        finish: 1235
                    }
                }
            }
        }
    };

    //expected Auction
    const expected = new Auction();
    expected.id = "test";
    expected.timeout = 1200;
    expected.start = 1234;
    expected.finish = 1236;

    const expectedAdUnit = new AdUnit();
    expectedAdUnit.id = "ad_unit_1";
    expectedAdUnit.status = "status";
    expectedAdUnit.timeout = 1200;
    expectedAdUnit.start = 1234;
    expectedAdUnit.finish = 1236;
    expectedAdUnit.sizes = [];

    const expectedBidder = new Bidder();
    expectedBidder.id = "bidder_1";
    expectedBidder.bat = 0;
    expectedBidder.status = "bid";
    expectedBidder.cpm = 0.01;
    expectedBidder.start = 1234;
    expectedBidder.finish = 1235;

    expectedAdUnit.bidders = [expectedBidder];
    expected.adunits = [expectedAdUnit];

    expect(JSON.stringify(Auction.from(auction))).toBe(JSON.stringify(expected));

});

test("bidder getter and setters", async () => {
    const i = new Impression();

    const spyAuctionIdGetter = jest.spyOn(i, 'auction_id', 'get');
    const spyAuctionIdSetter = jest.spyOn(i, 'auction_id', 'set');
    const spyCpmGetter = jest.spyOn(i, 'cpm', 'get');
    const spyCpmSetter = jest.spyOn(i, 'cpm', 'set');
    const spyWinnerGetter = jest.spyOn(i, 'winner', 'get');
    const spyWinnerSetter = jest.spyOn(i, 'winner', 'set');
    const spyAdUnitGetter = jest.spyOn(i, 'ad_unit', 'get');
    const spyAdUnitSetter = jest.spyOn(i, 'ad_unit', 'set');
    const spyTimeoutGetter = jest.spyOn(i, 'timeout', 'get');
    const spyTimeoutSetter = jest.spyOn(i, 'timeout', 'set');
    const spyAuctionStartGetter = jest.spyOn(i, 'auction_start', 'get');
    const spyAuctionStartSetter = jest.spyOn(i, 'auction_start', 'set');
    const spyAuctionFinishGetter = jest.spyOn(i, 'auction_finish', 'get');
    const spyAuctionFinishSetter = jest.spyOn(i, 'auction_finish', 'set');
    const spyGdprcGetter = jest.spyOn(i, 'gdprc', 'get');
    const spyGdprcSetter = jest.spyOn(i, 'gdprc', 'set');
    const spyStatusGetter = jest.spyOn(i, 'status', 'get');
    const spyStatusSetter = jest.spyOn(i, 'status', 'set');
    const spyMediaTypeGetter = jest.spyOn(i, 'media_type', 'get');
    const spyMediaTypeSetter = jest.spyOn(i, 'media_type', 'set');
    const spySizeGetter = jest.spyOn(i, 'size', 'get');
    const spySizeSetter = jest.spyOn(i, 'size', 'set');
    const spyBiddersGetter = jest.spyOn(i, 'bidders', 'get');
    const spyBiddersSetter = jest.spyOn(i, 'bidders', 'set');

    const spySessionGetter = jest.spyOn(i, 'session', 'get');
    const spySessionSetter = jest.spyOn(i, 'session', 'set');
    const spyHostGetter = jest.spyOn(i, 'host', 'get');
    const spyHostSetter = jest.spyOn(i, 'host', 'set');
    const spyReferrerGetter = jest.spyOn(i, 'referrer', 'get');
    const spyReferrerSetter = jest.spyOn(i, 'referrer', 'set');
    const spyDeviceGetter = jest.spyOn(i, 'device', 'get');
    const spyDeviceSetter = jest.spyOn(i, 'device', 'set');
    const spyTagsGetter = jest.spyOn(i, 'tags', 'get');
    const spyTagsSetter = jest.spyOn(i, 'tags', 'set');

    i.auction_id = "test_auction";
    i.cpm = 0.01;
    i.winner = "bidder_1";
    i.ad_unit = "path";
    i.timeout = 1200;
    i.auction_start = 1234;
    i.auction_finish = 1236;
    i.gdprc = 1;
    i.status = "finished";
    i.media_type = "banner";
    i.size = "1x1";
    i.bidders = [];

    i.session = "session";
    i.host = "host";
    i.path = "path";
    i.referrer = "referrer";
    i.device = "device";
    i.tags = [];

    expect(i.cpm).toEqual(0.01);
    expect(spyCpmGetter).toHaveBeenCalled();
    expect(spyCpmSetter).toHaveBeenCalled();

    expect(i.auction_id).toEqual('test_auction');
    expect(spyAuctionIdGetter).toHaveBeenCalled();
    expect(spyAuctionIdSetter).toHaveBeenCalled();

    expect(i.winner).toEqual("bidder_1");
    expect(spyWinnerGetter).toHaveBeenCalled();
    expect(spyWinnerSetter).toHaveBeenCalled();

    expect(i.ad_unit).toEqual("path");
    expect(spyAdUnitGetter).toHaveBeenCalled();
    expect(spyAdUnitSetter).toHaveBeenCalled();

    expect(i.timeout).toEqual(1200);
    expect(spyTimeoutGetter).toHaveBeenCalled();
    expect(spyTimeoutSetter).toHaveBeenCalled();

    expect(i.auction_start).toEqual(1234);
    expect(spyAuctionStartGetter).toHaveBeenCalled();
    expect(spyAuctionStartSetter).toHaveBeenCalled();

    expect(i.auction_finish).toEqual(1236);
    expect(spyAuctionFinishGetter).toHaveBeenCalled();
    expect(spyAuctionFinishSetter).toHaveBeenCalled();

    expect(i.gdprc).toEqual(1);
    expect(spyGdprcGetter).toHaveBeenCalled();
    expect(spyGdprcSetter).toHaveBeenCalled();

    expect(i.status).toEqual("finished");
    expect(spyStatusGetter).toHaveBeenCalled();
    expect(spyStatusSetter).toHaveBeenCalled();

    expect(i.media_type).toEqual("banner");
    expect(spyMediaTypeGetter).toHaveBeenCalled();
    expect(spyMediaTypeSetter).toHaveBeenCalled();

    expect(i.size).toEqual("1x1");
    expect(spySizeGetter).toHaveBeenCalled();
    expect(spySizeSetter).toHaveBeenCalled();

    expect(JSON.stringify(i.bidders)).toEqual(JSON.stringify([]));
    expect(spyBiddersGetter).toHaveBeenCalled();
    expect(spyBiddersSetter).toHaveBeenCalled();

    expect(i.session).toEqual("session");
    expect(spySessionGetter).toHaveBeenCalled();
    expect(spySessionSetter).toHaveBeenCalled();

    expect(i.host).toEqual("host");
    expect(spyHostGetter).toHaveBeenCalled();
    expect(spyHostSetter).toHaveBeenCalled();

    expect(i.referrer).toEqual("referrer");
    expect(spyReferrerGetter).toHaveBeenCalled();
    expect(spyReferrerSetter).toHaveBeenCalled();

    expect(i.device).toEqual("device");
    expect(spyDeviceGetter).toHaveBeenCalled();
    expect(spyDeviceSetter).toHaveBeenCalled();

    expect(JSON.stringify(i.tags)).toEqual(JSON.stringify([]));
    expect(spyTagsGetter).toHaveBeenCalled();
    expect(spyTagsSetter).toHaveBeenCalled();
});

test("bidder getter and setters", async () => {
    const bat = new BidAfterTimeout();

    const spyAuctionIdGetter = jest.spyOn(bat, 'auction_id', 'get');
    const spyAuctionIdSetter = jest.spyOn(bat, 'auction_id', 'set');
    const spyCpmGetter = jest.spyOn(bat, 'cpm', 'get');
    const spyCpmSetter = jest.spyOn(bat, 'cpm', 'set');
    const spyBidderGetter = jest.spyOn(bat, 'bidder', 'get');
    const spyBidderSetter = jest.spyOn(bat, 'bidder', 'set');
    const spyBidderStartGetter = jest.spyOn(bat, 'bidder_start', 'get');
    const spyBidderStartSetter = jest.spyOn(bat, 'bidder_start', 'set');
    const spyBidderFinishGetter = jest.spyOn(bat, 'bidder_finish', 'get');
    const spyBidderFinishSetter = jest.spyOn(bat, 'bidder_finish', 'set');
    const spyAdUnitGetter = jest.spyOn(bat, 'ad_unit', 'get');
    const spyAdUnitSetter = jest.spyOn(bat, 'ad_unit', 'set');
    const spyTimeoutGetter = jest.spyOn(bat, 'timeout', 'get');
    const spyTimeoutSetter = jest.spyOn(bat, 'timeout', 'set');
    const spyAuctionStartGetter = jest.spyOn(bat, 'auction_start', 'get');
    const spyAuctionStartSetter = jest.spyOn(bat, 'auction_start', 'set');
    const spyAuctionFinishGetter = jest.spyOn(bat, 'auction_finish', 'get');
    const spyAuctionFinishSetter = jest.spyOn(bat, 'auction_finish', 'set');
    const spyGdprcGetter = jest.spyOn(bat, 'gdprc', 'get');
    const spyGdprcSetter = jest.spyOn(bat, 'gdprc', 'set');
    const spyStatusGetter = jest.spyOn(bat, 'status', 'get');
    const spyStatusSetter = jest.spyOn(bat, 'status', 'set');
    const spyMediaTypeGetter = jest.spyOn(bat, 'media_type', 'get');
    const spyMediaTypeSetter = jest.spyOn(bat, 'media_type', 'set');
    const spyBiddersGetter = jest.spyOn(bat, 'bidders', 'get');
    const spyBiddersSetter = jest.spyOn(bat, 'bidders', 'set');

    const spySessionGetter = jest.spyOn(bat, 'session', 'get');
    const spySessionSetter = jest.spyOn(bat, 'session', 'set');
    const spyHostGetter = jest.spyOn(bat, 'host', 'get');
    const spyHostSetter = jest.spyOn(bat, 'host', 'set');
    const spyReferrerGetter = jest.spyOn(bat, 'referrer', 'get');
    const spyReferrerSetter = jest.spyOn(bat, 'referrer', 'set');
    const spyDeviceGetter = jest.spyOn(bat, 'device', 'get');
    const spyDeviceSetter = jest.spyOn(bat, 'device', 'set');
    const spyTagsGetter = jest.spyOn(bat, 'tags', 'get');
    const spyTagsSetter = jest.spyOn(bat, 'tags', 'set');

    bat.auction_id = "test_auction";
    bat.cpm = 0.01;
    bat.bidder = "bidder_1";
    bat.bidder_start = 1234;
    bat.bidder_finish = 1237;
    bat.ad_unit = "ad_unit_1";
    bat.timeout = 1200;
    bat.auction_start = 1234;
    bat.auction_finish = 1236;
    bat.gdprc = 1;
    bat.status = "bidAfterTimeout";
    bat.media_type = "banner";
    bat.bidders = [];

    bat.session = "session";
    bat.host = "host";
    bat.path = "path";
    bat.referrer = "referrer";
    bat.device = "device";
    bat.tags = [];

    expect(bat.cpm).toEqual(0.01);
    expect(spyCpmGetter).toHaveBeenCalled();
    expect(spyCpmSetter).toHaveBeenCalled();

    expect(bat.auction_id).toEqual('test_auction');
    expect(spyAuctionIdGetter).toHaveBeenCalled();
    expect(spyAuctionIdSetter).toHaveBeenCalled();

    expect(bat.bidder).toEqual("bidder_1");
    expect(spyBidderGetter).toHaveBeenCalled();
    expect(spyBidderSetter).toHaveBeenCalled();

    expect(bat.bidder_start).toEqual(1234);
    expect(spyBidderStartGetter).toHaveBeenCalled();
    expect(spyBidderStartSetter).toHaveBeenCalled();

    expect(bat.bidder_finish).toEqual(1237);
    expect(spyBidderFinishGetter).toHaveBeenCalled();
    expect(spyBidderFinishSetter).toHaveBeenCalled();

    expect(bat.ad_unit).toEqual("ad_unit_1");
    expect(spyAdUnitGetter).toHaveBeenCalled();
    expect(spyAdUnitSetter).toHaveBeenCalled();

    expect(bat.timeout).toEqual(1200);
    expect(spyTimeoutGetter).toHaveBeenCalled();
    expect(spyTimeoutSetter).toHaveBeenCalled();

    expect(bat.auction_start).toEqual(1234);
    expect(spyAuctionStartGetter).toHaveBeenCalled();
    expect(spyAuctionStartSetter).toHaveBeenCalled();

    expect(bat.auction_finish).toEqual(1236);
    expect(spyAuctionFinishGetter).toHaveBeenCalled();
    expect(spyAuctionFinishSetter).toHaveBeenCalled();

    expect(bat.gdprc).toEqual(1);
    expect(spyGdprcGetter).toHaveBeenCalled();
    expect(spyGdprcSetter).toHaveBeenCalled();

    expect(bat.status).toEqual("bidAfterTimeout");
    expect(spyStatusGetter).toHaveBeenCalled();
    expect(spyStatusSetter).toHaveBeenCalled();

    expect(bat.media_type).toEqual("banner");
    expect(spyMediaTypeGetter).toHaveBeenCalled();
    expect(spyMediaTypeSetter).toHaveBeenCalled();

    expect(JSON.stringify(bat.bidders)).toEqual(JSON.stringify([]));
    expect(spyBiddersGetter).toHaveBeenCalled();
    expect(spyBiddersSetter).toHaveBeenCalled();

    expect(bat.session).toEqual("session");
    expect(spySessionGetter).toHaveBeenCalled();
    expect(spySessionSetter).toHaveBeenCalled();

    expect(bat.host).toEqual("host");
    expect(spyHostGetter).toHaveBeenCalled();
    expect(spyHostSetter).toHaveBeenCalled();

    expect(bat.referrer).toEqual("referrer");
    expect(spyReferrerGetter).toHaveBeenCalled();
    expect(spyReferrerSetter).toHaveBeenCalled();

    expect(bat.device).toEqual("device");
    expect(spyDeviceGetter).toHaveBeenCalled();
    expect(spyDeviceSetter).toHaveBeenCalled();

    expect(JSON.stringify(bat.tags)).toEqual(JSON.stringify([]));
    expect(spyTagsGetter).toHaveBeenCalled();
    expect(spyTagsSetter).toHaveBeenCalled();
});

test("bidder getter and setters", async () => {
    const b = new Bidder();

    const spyIdGetter = jest.spyOn(b, 'id', 'get');
    const spyIdSetter = jest.spyOn(b, 'id', 'set');
    const spyBatGetter = jest.spyOn(b, 'bat', 'get');
    const spyBatSetter = jest.spyOn(b, 'bat', 'set');
    const spyCpmGetter = jest.spyOn(b, 'cpm', 'get');
    const spyCpmSetter = jest.spyOn(b, 'cpm', 'set');
    const spyStartGetter = jest.spyOn(b, 'start', 'get');
    const spyStartSetter = jest.spyOn(b, 'start', 'set');
    const spyFinishGetter = jest.spyOn(b, 'finish', 'get');
    const spyFinishSetter = jest.spyOn(b, 'finish', 'set');
    const spyStatusGetter = jest.spyOn(b, 'status', 'get');
    const spyStatusSetter = jest.spyOn(b, 'status', 'set');

    b.id = "bidder";
    b.bat = 0;
    b.status = "bid";
    b.cpm = 0.01;
    b.start = 1234;
    b.finish = 1235;

    expect(b.id).toEqual('bidder');
    expect(spyIdGetter).toHaveBeenCalled();
    expect(spyIdSetter).toHaveBeenCalled();

    expect(b.bat).toEqual(0);
    expect(spyBatGetter).toHaveBeenCalled();
    expect(spyBatSetter).toHaveBeenCalled();

    expect(b.start).toEqual(1234);
    expect(spyStartGetter).toHaveBeenCalled();
    expect(spyStartSetter).toHaveBeenCalled();

    expect(b.finish).toEqual(1235);
    expect(spyFinishGetter).toHaveBeenCalled();
    expect(spyFinishSetter).toHaveBeenCalled();

    expect(b.status).toEqual("bid");
    expect(spyStatusGetter).toHaveBeenCalled();
    expect(spyStatusSetter).toHaveBeenCalled();

    expect(b.cpm).toEqual(0.01);
    expect(spyCpmGetter).toHaveBeenCalled();
    expect(spyCpmSetter).toHaveBeenCalled();

});

test("adunit getter and setters", async () => {
    const ad = new AdUnit();

    const spyIdGetter = jest.spyOn(ad, 'id', 'get');
    const spyIdSetter = jest.spyOn(ad, 'id', 'set');
    const spyTimeoutGetter = jest.spyOn(ad, 'timeout', 'get');
    const spyTimeoutSetter = jest.spyOn(ad, 'timeout', 'set');
    const spyStartGetter = jest.spyOn(ad, 'start', 'get');
    const spyStartSetter = jest.spyOn(ad, 'start', 'set');
    const spyFinishGetter = jest.spyOn(ad, 'finish', 'get');
    const spyFinishSetter = jest.spyOn(ad, 'finish', 'set');
    const spyStatusGetter = jest.spyOn(ad, 'status', 'get');
    const spyStatusSetter = jest.spyOn(ad, 'status', 'set');
    const spySizesGetter = jest.spyOn(ad, 'sizes', 'get');
    const spySizesSetter = jest.spyOn(ad, 'sizes', 'set');
    const spyBiddersGetter = jest.spyOn(ad, 'bidders', 'get');
    const spyBiddersSetter = jest.spyOn(ad, 'bidders', 'set');

    ad.id = "ad_unit";
    ad.status = "status";
    ad.timeout = 1200;
    ad.start = 1234;
    ad.finish = 1236;
    ad.sizes = ["1x1"];
    ad.bidders = [];

    expect(ad.id).toEqual('ad_unit');
    expect(spyIdGetter).toHaveBeenCalled();
    expect(spyIdSetter).toHaveBeenCalled();

    expect(ad.timeout).toEqual(1200);
    expect(spyTimeoutGetter).toHaveBeenCalled();
    expect(spyTimeoutSetter).toHaveBeenCalled();

    expect(ad.start).toEqual(1234);
    expect(spyStartGetter).toHaveBeenCalled();
    expect(spyStartSetter).toHaveBeenCalled();

    expect(ad.finish).toEqual(1236);
    expect(spyFinishGetter).toHaveBeenCalled();
    expect(spyFinishSetter).toHaveBeenCalled();

    expect(ad.status).toEqual("status");
    expect(spyStatusGetter).toHaveBeenCalled();
    expect(spyStatusSetter).toHaveBeenCalled();

    expect(JSON.stringify(ad.sizes)).toEqual(JSON.stringify(["1x1"]));
    expect(spySizesGetter).toHaveBeenCalled();
    expect(spySizesSetter).toHaveBeenCalled();

    expect(JSON.stringify(ad.bidders)).toEqual(JSON.stringify([]));
    expect(spyBiddersGetter).toHaveBeenCalled();
    expect(spyBiddersSetter).toHaveBeenCalled();
});

test("auction getter and setters", async () => {
    const a = new Auction();

    const spyIdGetter = jest.spyOn(a, 'id', 'get');
    const spyIdSetter = jest.spyOn(a, 'id', 'set');
    const spyTimeoutGetter = jest.spyOn(a, 'timeout', 'get');
    const spyTimeoutSetter = jest.spyOn(a, 'timeout', 'set');
    const spyStartGetter = jest.spyOn(a, 'start', 'get');
    const spyStartSetter = jest.spyOn(a, 'start', 'set');
    const spyFinishGetter = jest.spyOn(a, 'finish', 'get');
    const spyFinishSetter = jest.spyOn(a, 'finish', 'set');
    const spyGdprcGetter = jest.spyOn(a, 'gdprc', 'get');
    const spyGdprcSetter = jest.spyOn(a, 'gdprc', 'set');

    const spySessionGetter = jest.spyOn(a, 'session', 'get');
    const spySessionSetter = jest.spyOn(a, 'session', 'set');
    const spyHostGetter = jest.spyOn(a, 'host', 'get');
    const spyHostSetter = jest.spyOn(a, 'host', 'set');
    const spyReferrerGetter = jest.spyOn(a, 'referrer', 'get');
    const spyReferrerSetter = jest.spyOn(a, 'referrer', 'set');
    const spyDeviceGetter = jest.spyOn(a, 'device', 'get');
    const spyDeviceSetter = jest.spyOn(a, 'device', 'set');
    const spyTagsGetter = jest.spyOn(a, 'tags', 'get');
    const spyTagsSetter = jest.spyOn(a, 'tags', 'set');

    a.id = "test";
    a.timeout = 1200;
    a.start = 1234;
    a.finish = 1236;
    a.gdprc = 1;

    a.session = "session";
    a.host = "host";
    a.path = "path";
    a.referrer = "referrer";
    a.device = "device";
    a.tags = [];

    expect(a.id).toEqual('test');
    expect(spyIdGetter).toHaveBeenCalled();
    expect(spyIdSetter).toHaveBeenCalled();

    expect(a.timeout).toEqual(1200);
    expect(spyTimeoutGetter).toHaveBeenCalled();
    expect(spyTimeoutSetter).toHaveBeenCalled();

    expect(a.start).toEqual(1234);
    expect(spyStartGetter).toHaveBeenCalled();
    expect(spyStartSetter).toHaveBeenCalled();

    expect(a.finish).toEqual(1236);
    expect(spyFinishGetter).toHaveBeenCalled();
    expect(spyFinishSetter).toHaveBeenCalled();

    expect(a.gdprc).toEqual(1);
    expect(spyGdprcGetter).toHaveBeenCalled();
    expect(spyGdprcSetter).toHaveBeenCalled();

    expect(a.session).toEqual("session");
    expect(spySessionGetter).toHaveBeenCalled();
    expect(spySessionSetter).toHaveBeenCalled();

    expect(a.host).toEqual("host");
    expect(spyHostGetter).toHaveBeenCalled();
    expect(spyHostSetter).toHaveBeenCalled();

    expect(a.referrer).toEqual("referrer");
    expect(spyReferrerGetter).toHaveBeenCalled();
    expect(spyReferrerSetter).toHaveBeenCalled();

    expect(a.device).toEqual("device");
    expect(spyDeviceGetter).toHaveBeenCalled();
    expect(spyDeviceSetter).toHaveBeenCalled();

    expect(JSON.stringify(a.tags)).toEqual(JSON.stringify([]));
    expect(spyTagsGetter).toHaveBeenCalled();
    expect(spyTagsSetter).toHaveBeenCalled();
});