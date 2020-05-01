import Prebid from "../../../src/events/prebid/prebid";
import {LeyaClient} from "../../../src/api/lc";
import Axios from 'axios';
import {Gdpr, Session, User} from "../../../src/core/model";
import {NoSessionError} from "../../../src/core/errors/nosession_error";

jest.mock('axios');

beforeEach(() => {
    Axios.post.mockImplementationOnce(() => Promise.resolve());

    let u = new User();
    u.gdpr = new Gdpr();

    u.gdpr.gdprDetails = jest.fn();
    u.gdpr.gdprDetails.mockReturnValue({
        getConsentValue: 3,
        vendorList: undefined,
        consentData: [1],
        vendorData: [1]
    });
    u.gdpr.consented = 3;

    window.Leya = {};
    window.Leya.getKey = jest.fn();
    window.Leya.isSessionOpen = jest.fn();
    window.Leya.getSession = jest.fn();
    window.Leya.getUser = jest.fn();
    window.Leya.getTags = jest.fn();

    window.Leya.getUser.mockReturnValue(u);
    window.Leya.getTags.mockReturnValue([]);
    window.Leya.getSession.mockReturnValue(new Session("test-id"));
});

afterEach(() => {
    jest.clearAllMocks();
});

//handleAuctionEvent

test("it should handle, and send, a valid auction event", async () => {
    let pb = new Prebid(new LeyaClient(5000, 1));

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    const ev = {
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

    await pb.handleAuctionEvent(ev);

    expect(Axios.post).toHaveBeenCalled();
});

test("it should handle, and send, a valid auction event without adUnitSizes", async () => {
    let pb = new Prebid(new LeyaClient(5000, 1));

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    const ev = {
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

    await pb.handleAuctionEvent(ev);

    expect(Axios.post).toHaveBeenCalled();
});

test("it should handle, and send, a valid auction event with GDPR value != 3 and User GDPR value != 3", async () => {
    let pb = new Prebid(new LeyaClient(5000, 1));

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    let u = new User();
    u.gdpr = new Gdpr();

    u.gdpr.gdprDetails = jest.fn();
    u.gdpr.gdprDetails.mockReturnValue({
        getConsentValue: 1,
        vendorList: "123",
        consentData: [1],
        vendorData: [1]
    });
    u.gdpr.consented = 1;

    window.Leya.getUser.mockReturnValue(u);

    const ev = {
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

    await pb.handleAuctionEvent(ev);

    expect(Axios.post).toHaveBeenCalled();
});

test("it should handle, and send, a valid auction event with GDPR value == 3 and User GDPR value != 3", async () => {
    let pb = new Prebid(new LeyaClient(5000, 1));

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    let u = new User();
    u.gdpr = new Gdpr();

    u.gdpr.gdprDetails = jest.fn();
    u.gdpr.gdprDetails.mockReturnValue({
        getConsentValue: 1,
        vendorList: "123",
        consentData: [1],
        vendorData: [1]
    });
    u.gdpr.consented = 1;

    window.Leya.getUser.mockReturnValue(u);

    const ev = {
        id: "test",
        timeout: 1200,
        start: 1234,
        finish: 1236,
        gdpr_consent: 3,
        adUnits: {
            "ad_unit_1": {
                adUnitPath: "path",
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

    await pb.handleAuctionEvent(ev);

    expect(Axios.post).toHaveBeenCalled();
});

test("it should handle, and send, a valid auction event with GDPR value == 3 and User GDPR value == 3", async () => {
    let pb = new Prebid(new LeyaClient(5000, 1));

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    let u = new User();
    u.gdpr = new Gdpr();

    u.gdpr.gdprDetails = jest.fn();
    u.gdpr.gdprDetails.mockReturnValue({
        getConsentValue: 3,
        vendorList: "123",
        consentData: [1],
        vendorData: [1]
    });
    u.gdpr.consented = 3;

    window.Leya.getUser.mockReturnValue(u);

    const ev = {
        id: "test",
        timeout: 1200,
        start: 1234,
        finish: 1236,
        gdpr_consent: 3,
        adUnits: {
            "ad_unit_1": {
                adUnitPath: "path",
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

    await pb.handleAuctionEvent(ev);

    expect(Axios.post).toHaveBeenCalled();
});

test("should throw an error when attempting to handle auction event without open session", async () => {
    let pb = new Prebid(new LeyaClient(5000, 1));

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(false);

    const ev = {
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
                adUnitSizes: [],
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

    await expect(async () => await pb.handleAuctionEvent(ev)).rejects.toThrow(NoSessionError);
});

//handleImpressionEvent

test("it should handle, and send, a valid impression event", async () => {
    let pb = new Prebid(new LeyaClient(5000, 1));

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    const ev = {
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

    await pb.handleImpressionEvent(ev);

    expect(Axios.post).toHaveBeenCalled();
});

test("should throw an error when attempting to handle impression event without open session", async () => {
    let pb = new Prebid(new LeyaClient(5000, 1));

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(false);

    const ev = {
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

    await expect(async () => await await pb.handleImpressionEvent(ev)).rejects.toThrow(NoSessionError);
});

test("it should handle, and send, a valid impression event with GDPR value != 3 and User GDPR value != 3", async () => {
    let pb = new Prebid(new LeyaClient(5000, 1));

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    let u = new User();
    u.gdpr = new Gdpr();

    u.gdpr.gdprDetails = jest.fn();
    u.gdpr.gdprDetails.mockReturnValue({
        getConsentValue: 1,
        vendorList: "123",
        consentData: [1],
        vendorData: [1]
    });
    u.gdpr.consented = 1;

    window.Leya.getUser.mockReturnValue(u);

    const ev = {
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

    await pb.handleImpressionEvent(ev);

    expect(Axios.post).toHaveBeenCalled();
});

test("it should handle, and send, a valid impression event with GDPR value == 3 and User GDPR value != 3", async () => {
    let pb = new Prebid(new LeyaClient(5000, 1));

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    let u = new User();
    u.gdpr = new Gdpr();

    u.gdpr.gdprDetails = jest.fn();
    u.gdpr.gdprDetails.mockReturnValue({
        getConsentValue: 1,
        vendorList: "123",
        consentData: [1],
        vendorData: [1]
    });
    u.gdpr.consented = 1;

    window.Leya.getUser.mockReturnValue(u);

    const ev = {
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
            gdpr_consent: 3,
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

    await pb.handleImpressionEvent(ev);

    expect(Axios.post).toHaveBeenCalled();
});

test("it should handle, and send, a valid impression event with GDPR value == 3 and User GDPR value == 3", async () => {
    let pb = new Prebid(new LeyaClient(5000, 1));

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    let u = new User();
    u.gdpr = new Gdpr();

    u.gdpr.gdprDetails = jest.fn();
    u.gdpr.gdprDetails.mockReturnValue({
        getConsentValue: 3,
        vendorList: "123",
        consentData: [1],
        vendorData: [1]
    });
    u.gdpr.consented = 3;

    window.Leya.getUser.mockReturnValue(u);

    const ev = {
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
            gdpr_consent: 3,
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

    await pb.handleImpressionEvent(ev);

    expect(Axios.post).toHaveBeenCalled();
});

//handleBidAfterTimeoutEvent

test("it should handle, and send, a valid bid after timeout event", async () => {
    let pb = new Prebid(new LeyaClient(5000, 1));

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    const ev = {
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

    await pb.handleBidAfterTimeoutEvent(ev);

    expect(Axios.post).toHaveBeenCalled();
});

test("should throw an error when attempting to handle bid after timeout event without open session", async () => {
    let pb = new Prebid(new LeyaClient(5000, 1));

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(false);

    const ev = {
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

    await expect(async () => await await pb.handleBidAfterTimeoutEvent(ev)).rejects.toThrow(NoSessionError);
});

test("it should handle, and send, a valid bid after timeout event with GDPR value != 3 and User GDPR value != 3", async () => {
    let pb = new Prebid(new LeyaClient(5000, 1));

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    let u = new User();
    u.gdpr = new Gdpr();

    u.gdpr.gdprDetails = jest.fn();
    u.gdpr.gdprDetails.mockReturnValue({
        getConsentValue: 1,
        vendorList: "123",
        consentData: [1],
        vendorData: [1]
    });
    u.gdpr.consented = 1;

    window.Leya.getUser.mockReturnValue(u);

    const ev = {
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

    await pb.handleBidAfterTimeoutEvent(ev);

    expect(Axios.post).toHaveBeenCalled();
});

test("it should handle, and send, a valid bid after timeout event with GDPR value == 3 and User GDPR value != 3", async () => {
    let pb = new Prebid(new LeyaClient(5000, 1));

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    let u = new User();
    u.gdpr = new Gdpr();

    u.gdpr.gdprDetails = jest.fn();
    u.gdpr.gdprDetails.mockReturnValue({
        getConsentValue: 1,
        vendorList: "123",
        consentData: [1],
        vendorData: [1]
    });
    u.gdpr.consented = 1;

    window.Leya.getUser.mockReturnValue(u);

    const ev = {
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
            gdpr_consent: 3,
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

    await pb.handleBidAfterTimeoutEvent(ev);

    expect(Axios.post).toHaveBeenCalled();
});

test("it should handle, and send, a valid bid after timeout event with GDPR value == 3 and User GDPR value == 3", async () => {
    let pb = new Prebid(new LeyaClient(5000, 1));

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    let u = new User();
    u.gdpr = new Gdpr();

    u.gdpr.gdprDetails = jest.fn();
    u.gdpr.gdprDetails.mockReturnValue({
        getConsentValue: 3,
        vendorList: "123",
        consentData: [1],
        vendorData: [1]
    });
    u.gdpr.consented = 3;

    window.Leya.getUser.mockReturnValue(u);

    const ev = {
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
            gdpr_consent: 3,
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

    await pb.handleBidAfterTimeoutEvent(ev);

    expect(Axios.post).toHaveBeenCalled();
});