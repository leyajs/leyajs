import A9 from "../../../src/events/a9/a9";
import {LeyaClient} from "../../../src/api/lc";
import Axios from 'axios';
import {LOGGER} from "../../../src/core/utils";
import {ApiError} from "../../../src/core/errors/api_error";
import {Gdpr, Session, User} from "../../../src/core/model";
import {NoSessionError} from "../../../src/core/errors/nosession_error";
import {EmptyLineItemsMapError} from "../../../src/core/errors/empty_line_items_map_error";
import {MissingRequiredPropertyError} from "../../../src/core/errors/missing_required_property_error";

jest.mock('axios');

beforeEach(() => {
    Axios.mockImplementationOnce(() => Promise.resolve());

    let u = new User();
    u.gdpr = new Gdpr();

    u.gdpr.gdprDetails = jest.fn();
    u.gdpr.gdprDetails.mockReturnValue({
        getConsentValue: 3,
        vendorList: undefined,
        consentData: [1],
        vendorData: [1]
    });

    window.Leya = {};
    window.Leya.getKey = jest.fn();
    window.Leya.isSessionOpen = jest.fn();
    window.Leya.getSession = jest.fn();
    window.Leya.getUser = jest.fn();
    window.Leya.getTags = jest.fn();

    window.Leya.getUser.mockReturnValue(u);
    window.Leya.getTags.mockReturnValue(["key", "value"]);
    window.Leya.getSession.mockReturnValue(new Session("test-id"));
});

afterEach(() => {
    jest.clearAllMocks();
});

test("it should log warning when retrieved line item map is empty", async () => {
    let a9 = new A9(new LeyaClient(5000, 1), 1800, 10);

    const warn = jest.spyOn(LOGGER, 'warn');
    window.Leya.getKey.mockReturnValue("test");
    Axios.get.mockImplementationOnce(() => Promise.resolve());
    await a9.init();

    expect(Axios.get).toHaveBeenCalled();
    expect(warn).toHaveBeenCalled();

});

test("it should not log warning when retrieved line item map is not empty", async () => {
    let a9 = new A9(new LeyaClient(5000, 1), 1800, 10);

    const warn = jest.spyOn(LOGGER, 'warn');
    window.Leya.getKey.mockReturnValue("test");
    Axios.get.mockImplementation(() => Promise.resolve({data: {"123": "123"}}));

    await a9.init();

    expect(Axios.get).toHaveBeenCalled();
    expect(warn).not.toHaveBeenCalled();

});

test("it should throw ApiError when an error occurs while retrieving line item map", async () => {
    let a9 = new A9(new LeyaClient(5000, 1), 1800, 10);

    window.Leya.getKey.mockReturnValue("test");
    Axios.get.mockImplementation(() => Promise.reject({}));

    await expect(async () => await a9.init()).rejects.toThrow(ApiError);
});

test("it should return the retrieved line item map", async () => {
    let a9 = new A9(new LeyaClient(5000, 1), 1800, 10);

    window.Leya.getKey.mockReturnValue("test");
    Axios.get.mockImplementation(() => Promise.resolve({data: {"123": "123"}}));

    await a9.init();
    let lm = await a9.getLineItemsMap();

    expect(JSON.stringify(lm)).toBe(JSON.stringify({"123": "123"}));
});

//handle handleAuctionEvent

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

test("it should handle, and send, a valid auction event", async () => {
    let a9 = new A9(new LeyaClient(5000, 1), 1800, 10);

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    const ev = {
        start: null,
        finish: new Date().getTime(),
        request: [
            {
                slotID: "123",
                slotName: "123",
                sizes: ["1x1"]
            }
        ],
        response: [
            {
                slotID: "123",
                amzniid: "a",
                amznbid: "b",
                amznp: "c",
                amznsz: "1x1",
                size: "1x1"
            }
        ]
    };

    //get line item map
    Axios.get.mockImplementation(() => Promise.resolve({data: {"123": "123"}}));

    await a9.init();

    await a9.handleAuctionEvent(ev);

    expect(Axios).toHaveBeenCalled();
});

test("it should handle, and send, a valid auction event", async () => {
    let a9 = new A9(new LeyaClient(5000, 1), 1800, 10);

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    let u = new User();
    u.gdpr = new Gdpr();

    u.gdpr.gdprDetails = jest.fn();
    u.gdpr.gdprDetails.mockReturnValue({
        getConsentValue: 1,
        vendorList: undefined,
        consentData: [1],
        vendorData: [1]
    });
    u.gdpr.consented = undefined;

    window.Leya.getUser.mockReturnValue(u);

    const ev = {
        start: new Date().getTime(),
        finish: new Date().getTime(),
        request: [
            {
                slotID: "123",
                slotName: "123",
                sizes: ["1x1"]
            }
        ],
        response: [
            {
                slotID: "123",
                amzniid: "a",
                amznbid: "b",
                amznp: "c",
                amznsz: "1x1",
                size: "1x1"
            }
        ]
    };

    //get line item map
    Axios.get.mockImplementation(() => Promise.resolve({data: {"123": "123"}}));

    await a9.init();

    await a9.handleAuctionEvent(ev);

    expect(Axios).toHaveBeenCalled();
});

test("it should throw an error when attempting to handle auction event without session", async () => {
    let a9 = new A9(new LeyaClient(5000, 1), 1800, 10);

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(false);

    const ev = {
        start: null,
        finish: new Date().getTime(),
        request: [
            {
                slotID: "123",
                slotName: "123",
                sizes: ["1x1"]
            }
        ],
        response: [
            {
                slotID: "123",
                amzniid: "a",
                amznbid: "b",
                amznp: "c",
                amznsz: "1x1",
                size: "1x1"
            }
        ]
    };

    //get line item map
    Axios.get.mockImplementation(() => Promise.resolve({data: {"123": "123"}}));

    await a9.init();

    await expect(async () => await a9.handleAuctionEvent(ev)).rejects.toThrow(NoSessionError);
});

test("it should throw an error when attempting to handle auction event with empty item list map", async () => {
    let a9 = new A9(new LeyaClient(5000, 1), 1800, 10);

    const warn = jest.spyOn(LOGGER, 'warn');

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    const ev = {
        start: null,
        finish: null,
        request: [
            {
                slotID: "123",
                slotName: "123",
                sizes: ["1x1"]
            }
        ],
        response: [
            {
                slotID: "123",
                amznbid: "b",
                amznp: "c",
                amznsz: "1x1",
                size: "1x1"
            }
        ]
    };

    //get line item map
    Axios.get.mockImplementation(() => Promise.resolve({}));

    await a9.init();

    await expect(async () => await a9.handleAuctionEvent(ev)).rejects.toThrow(EmptyLineItemsMapError);
    expect(warn).toHaveBeenCalled();
});

test("it should throw an error when auction event is missing request attribute", async () => {
    let a9 = new A9(new LeyaClient(5000, 1), 1800, 10);

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    const ev = {
        start: null,
        finish: new Date().getTime(),
        response: [
            {
                slotID: "123",
                amzniid: "a",
                amznbid: "b",
                amznp: "c",
                amznsz: "1x1",
                size: "1x1"
            }
        ]
    };

    //get line item map
    Axios.get.mockImplementation(() => Promise.resolve({data: {"123": "123"}}));

    await a9.init();

    await expect(async () => await a9.handleAuctionEvent(ev)).rejects.toThrow(MissingRequiredPropertyError);
});

test("it should throw an error when auction event is missing response attribute", async () => {
    let a9 = new A9(new LeyaClient(5000, 1), 1800, 10);

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    const ev = {
        start: null,
        finish: new Date().getTime(),
        request: [
            {
                slotID: "123",
                slotName: "123",
                sizes: ["1x1"]
            }
        ]
    };

    //get line item map
    Axios.get.mockImplementation(() => Promise.resolve({data: {"123": "123"}}));

    await a9.init();

    await expect(async () => await a9.handleAuctionEvent(ev)).rejects.toThrow(MissingRequiredPropertyError);
});

//handleImpressionEvent

test("should handle, and send, a valid impression event", async () => {
    //first setup impression auction
    let a9 = new A9(new LeyaClient(5000, 1), 1800, 10);

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    const ev = {
        start: null,
        finish: new Date().getTime(),
        request: [
            {
                slotID: "123",
                slotName: "123",
                sizes: ["1x1"]
            }
        ],
        response: [
            {
                slotID: "123",
                amzniid: "a",
                amznbid: "b",
                amznp: "c",
                amznsz: "1x1",
                size: "1x1"
            }
        ]
    };

    //get line item map
    Axios.get.mockImplementation(() => Promise.resolve({data: {"123": "123"}}));

    await a9.init();

    await a9.handleAuctionEvent(ev);

    expect(Axios).toHaveBeenCalled();
    //
    const impression = {
        amzniid: "a",
        amznbid: "b",
        amznp: "c",
        slotName: "123"
    };

    await a9.handleImpressionEvent(impression);

    expect(window.Leya.isSessionOpen).toHaveBeenCalled();
    expect(window.Leya.getUser).toHaveBeenCalled();
    expect(window.Leya.getKey).toHaveBeenCalled();
    expect(window.Leya.getTags).toHaveBeenCalled();
    expect(Axios).toHaveBeenCalled();
});

test("should handle, and send, a valid impression event without matching previous auction", async () => {
    //first setup impression auction
    let a9 = new A9(new LeyaClient(5000, 0), 1, 1);

    const warn = jest.spyOn(LOGGER, 'warn');
    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    const ev = {
        start: null,
        finish: new Date().getTime(),
        request: [
            {
                slotID: "123",
                slotName: "123",
                sizes: ["1x1"]
            }
        ],
        response: [
            {
                slotID: "123",
                amzniid: "a",
                amznbid: "b",
                amznp: "c",
                amznsz: "1x1",
                size: "1x1"
            }
        ]
    };

    //get line item map
    Axios.get.mockImplementation(() => Promise.resolve({data: {"123": "123"}}));

    await a9.init();

    await a9.handleAuctionEvent(ev);

    expect(Axios).toHaveBeenCalled();
    //
    const impression = {
        amzniid: "n",
        amznbid: "m",
        amznp: "p",
        slotName: "456"
    };

    await a9.handleImpressionEvent(impression);

    expect(window.Leya.isSessionOpen).toHaveBeenCalled();
    expect(window.Leya.getUser).toHaveBeenCalled();
    expect(window.Leya.getKey).toHaveBeenCalled();
    expect(window.Leya.getTags).toHaveBeenCalled();
    expect(warn).toHaveBeenCalled();
    expect(Axios).toHaveBeenCalled();
});

test("should handle, and send, a valid impression event without matching previous auction (impression for an auction that never happened)", async done => {
    //first setup impression auction
    let a9 = new A9(new LeyaClient(5000, 1), 1, 1);

    const warn = jest.spyOn(LOGGER, 'warn');
    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    let u = new User();
    u.gdpr = new Gdpr();

    u.gdpr.gdprDetails = jest.fn();
    u.gdpr.gdprDetails.mockReturnValue({
        getConsentValue: 1,
        vendorList: undefined,
        consentData: [1],
        vendorData: [1]
    });
    u.gdpr.consented = undefined;
    window.Leya.getUser.mockReturnValue(u);

    //get line item map
    Axios.get.mockImplementation(() => Promise.resolve({data: {"123": "123"}}));

    await a9.init();

    //
    const impression = {
        amzniid: "n",
        amznbid: "m",
        amznp: "p",
        slotName: "456"
    };

    setTimeout(function () {
        a9.handleImpressionEvent(impression)
            .finally(() => {
                expect(window.Leya.isSessionOpen).toHaveBeenCalled();
                expect(window.Leya.getUser).toHaveBeenCalled();
                expect(window.Leya.getKey).toHaveBeenCalled();
                expect(window.Leya.getTags).toHaveBeenCalled();
                expect(warn).toHaveBeenCalled();
                expect(Axios).toHaveBeenCalled();
                done();
            });
    }, 2000);
});

test("should handle, and send, a valid impression event without matching previous auction due to auction ttl", async done => {
    //first setup impression auction
    //expire auctions after 1 second and check them every second
    let a9 = new A9(new LeyaClient(5000, 1), 1, 1);

    const warn = jest.spyOn(LOGGER, 'warn');
    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    const ev = {
        start: null,
        finish: new Date().getTime(),
        request: [
            {
                slotID: "123",
                slotName: "123",
                sizes: ["1x1"]
            }
        ],
        response: [
            {
                slotID: "123",
                amzniid: "a",
                amznbid: "b",
                amznp: "c",
                amznsz: "1x1",
                size: "1x1"
            }
        ]
    };

    //get line item map
    Axios.get.mockImplementation(() => Promise.resolve({data: {"123": "123"}}));

    await a9.init();

    await a9.handleAuctionEvent(ev);

    expect(Axios).toHaveBeenCalled();
    //
    const impression = {
        amzniid: "a",
        amznbid: "b",
        amznp: "c",
        slotName: "123"
    };

    setTimeout(function () {
        a9.handleImpressionEvent(impression)
            .finally(() => {
                expect(window.Leya.isSessionOpen).toHaveBeenCalled();
                expect(window.Leya.getUser).toHaveBeenCalled();
                expect(window.Leya.getKey).toHaveBeenCalled();
                expect(window.Leya.getTags).toHaveBeenCalled();
                expect(warn).toHaveBeenCalled();
                expect(Axios).toHaveBeenCalled();
                done();
            });
    }, 2000);
});

test("should throw an error when attempting to handle impression event without open session", async () => {
    //first setup impression auction
    let a9 = new A9(new LeyaClient(5000, 1), 1800, 10);

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    const ev = {
        start: null,
        finish: new Date().getTime(),
        request: [
            {
                slotID: "123",
                slotName: "123",
                sizes: ["1x1"]
            }
        ],
        response: [
            {
                slotID: "123",
                amzniid: "a",
                amznbid: "b",
                amznp: "c",
                amznsz: "1x1",
                size: "1x1"
            }
        ]
    };

    //get line item map
    Axios.get.mockImplementation(() => Promise.resolve({data: {"123": "123"}}));

    await a9.init();

    await a9.handleAuctionEvent(ev);

    expect(Axios).toHaveBeenCalled();
    //
    const impression = {
        amzniid: "a",
        amznbid: "b",
        amznp: "c",
        slotName: "123"
    };

    window.Leya.isSessionOpen.mockReturnValue(false);

    await expect(async () => await a9.handleImpressionEvent(impression)).rejects.toThrow(NoSessionError);
});

test("should throw an error when impression lacks required attribute", async () => {
    //first setup impression auction
    let a9 = new A9(new LeyaClient(5000, 1), 1800, 10);

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    const ev = {
        start: null,
        finish: new Date().getTime(),
        request: [
            {
                slotID: "123",
                slotName: "123",
                sizes: ["1x1"]
            }
        ],
        response: [
            {
                slotID: "123",
                amzniid: "a",
                amznbid: "b",
                amznp: "c",
                amznsz: "1x1",
                size: "1x1"
            }
        ]
    };

    //get line item map
    Axios.get.mockImplementation(() => Promise.resolve({data: {"123": "123"}}));

    await a9.init();

    await a9.handleAuctionEvent(ev);

    expect(Axios).toHaveBeenCalled();
    //
    const impression = {
        amzniid: "n",
        amznbid: "m",
        amznp: "p"
    };

    await expect(async () => await a9.handleImpressionEvent(impression)).rejects.toThrow(MissingRequiredPropertyError);
});

test("should throw an error when impression lacks required attribute", async () => {
    //first setup impression auction
    let a9 = new A9(new LeyaClient(5000, 1), 1800, 10);

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    const ev = {
        start: null,
        finish: new Date().getTime(),
        request: [
            {
                slotID: "123",
                slotName: "123",
                sizes: ["1x1"]
            }
        ],
        response: [
            {
                slotID: "123",
                amzniid: "a",
                amznbid: "b",
                amznp: "c",
                amznsz: "1x1",
                size: "1x1"
            }
        ]
    };

    //get line item map
    Axios.get.mockImplementation(() => Promise.resolve({data: {"123": "123"}}));

    await a9.init();

    await a9.handleAuctionEvent(ev);

    expect(Axios).toHaveBeenCalled();
    //
    const impression = {
        amzniid: "n",
        amznbid: "m",
        slotName: "456"
    };

    await expect(async () => await a9.handleImpressionEvent(impression)).rejects.toThrow(MissingRequiredPropertyError);
});

test("should throw an error when impression lacks required attribute", async () => {
    //first setup impression auction
    let a9 = new A9(new LeyaClient(5000, 1), 1800, 10);

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    const ev = {
        start: null,
        finish: new Date().getTime(),
        request: [
            {
                slotID: "123",
                slotName: "123",
                sizes: ["1x1"]
            }
        ],
        response: [
            {
                slotID: "123",
                amzniid: "a",
                amznbid: "b",
                amznp: "c",
                amznsz: "1x1",
                size: "1x1"
            }
        ]
    };

    //get line item map
    Axios.get.mockImplementation(() => Promise.resolve({data: {"123": "123"}}));

    await a9.init();

    await a9.handleAuctionEvent(ev);

    expect(Axios).toHaveBeenCalled();
    //
    const impression = {
        amzniid: "n",
        amznp: "p",
        slotName: "456"
    };

    await expect(async () => await a9.handleImpressionEvent(impression)).rejects.toThrow(MissingRequiredPropertyError);
});

test("should throw an error when impression lacks required attribute", async () => {
    //first setup impression auction
    let a9 = new A9(new LeyaClient(5000, 1), 1800, 10);

    window.Leya.getKey.mockReturnValue("test");
    window.Leya.isSessionOpen.mockReturnValue(true);

    const ev = {
        start: null,
        finish: new Date().getTime(),
        request: [
            {
                slotID: "123",
                slotName: "123",
                sizes: ["1x1"]
            }
        ],
        response: [
            {
                slotID: "123",
                amzniid: "a",
                amznbid: "b",
                amznp: "c",
                amznsz: "1x1",
                size: "1x1"
            }
        ]
    };

    //get line item map
    Axios.get.mockImplementation(() => Promise.resolve({data: {"123": "123"}}));

    await a9.init();

    await a9.handleAuctionEvent(ev);

    expect(Axios).toHaveBeenCalled();
    //
    const impression = {
        amznbid: "m",
        amznp: "p",
        slotName: "456"
    };

    await expect(async () => await a9.handleImpressionEvent(impression)).rejects.toThrow(MissingRequiredPropertyError);
});