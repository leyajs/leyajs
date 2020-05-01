import {LeyaClient} from "../../src/api/lc";

import Axios from 'axios';
import {LOGGER} from "../../src/core/utils";

jest.mock('axios');

beforeEach(() => {
    Axios.get.mockImplementationOnce(() => Promise.resolve());
    Axios.post.mockImplementationOnce(() => Promise.resolve());

    window.Leya = {};
    window.Leya.getKey = jest.fn();
});

afterEach(() => {
    jest.clearAllMocks();
});

test("should flush, but not send, events once batch size is reached", async () => {
    let c = new LeyaClient(5000, 2);

    const flush = jest.spyOn(c, "flush");
    const warn = jest.spyOn(LOGGER, "warn");

    await c.sendEvent({type: "test", data: {}});
    await c.sendEvent({type: "test", data: {}});
    await c.sendEvent({type: "test", data: {}});

    expect(flush).toHaveBeenCalled();
    expect(warn).toHaveBeenCalled();
});

test("should flush, and send, events once batch size is reached", async () => {
    let c = new LeyaClient(5000, 2);
    window.Leya.getKey.mockReturnValueOnce("testkey");

    const flush = jest.spyOn(c, "flush");

    await c.sendEvent({type: "test", data: {}});
    await c.sendEvent({type: "test", data: {}});
    await c.sendEvent({type: "test", data: {}});

    expect(flush).toHaveBeenCalled();
    expect(Axios.post).toHaveBeenCalled();
});

test("should flush, and send event using axio when sendBeacon fails", async () => {
    let c = new LeyaClient(5000, 2);
    window.Leya.getKey.mockReturnValueOnce("testkey");
    navigator.sendBeacon = jest.fn();
    navigator.sendBeacon.mockReturnValue(false);

    const flush = jest.spyOn(c, "flush");

    await c.sendEvent({type: "testBeacon", data: {}}, true);

    expect(flush).toHaveBeenCalled();
    expect(Axios.post).toHaveBeenCalled();
});

test("should flush, and send event using beacon when sendBeacon succeeds and not fallback to Axios", async () => {
    let c = new LeyaClient(5000, 2);
    window.Leya.getKey.mockReturnValueOnce("testkey");
    navigator.sendBeacon = jest.fn();
    navigator.sendBeacon.mockReturnValue(true);

    const flush = jest.spyOn(c, "flush");

    await c.sendEvent({type: "testBeacon", data: {}}, true);

    expect(flush).toHaveBeenCalled();
    expect(navigator.sendBeacon).toHaveBeenCalled();
    expect(Axios.post).not.toHaveBeenCalled();
});

test("should flush, and send, events once flush timeout is reached", async done => {
    let c = new LeyaClient(500, 10);
    c.scheduleFlush();
    window.Leya.getKey.mockReturnValueOnce("testkey");

    const flush = jest.spyOn(c, "flush");

    await c.sendEvent({type: "test", data: {}});
    await c.sendEvent({type: "test", data: {}});
    await c.sendEvent({type: "test", data: {}});

    setTimeout(function () {
        expect(flush).toHaveBeenCalled();
        expect(Axios.post).toHaveBeenCalled();
        done();
    }, 1100);
});

test("should flush, but not sent anything, once flush timeout is reached and there are no events", async done => {
    let c = new LeyaClient(500, 10);
    c.scheduleFlush();
    window.Leya.getKey.mockReturnValueOnce("testkey");

    const flush = jest.spyOn(c, "flush");

    setTimeout(function () {
        expect(flush).toHaveBeenCalled();
        done();
    }, 1100);
});

test("should retrieve A9 line items map", async () => {
    let c = new LeyaClient(5000, 2);
    window.Leya.getKey.mockReturnValueOnce("testkey");

    await c.getA9LineItemsMap();

    expect(Axios.get).toHaveBeenCalled();
});

test("should retrieve A9 line items map", async () => {
    let c = new LeyaClient(5000, 2);

    const warn = jest.spyOn(LOGGER, "warn");

    await c.getA9LineItemsMap();

    expect(warn).toHaveBeenCalled();
});

test("should return correct event queue size", async () => {
    let c = new LeyaClient(5000, 10);

    await c.sendEvent({type: "test", data: {}});
    await c.sendEvent({type: "test", data: {}});
    await c.sendEvent({type: "test", data: {}});

    expect(await c.getEventQueueSize()).toBe(3);
});