import '../src/main';
import {Gdpr, User} from '../src/core/model'
import Axios from 'axios';
import {LOGGER} from "../src/core/utils";

jest.mock('axios');

beforeEach(() => {
    Leya.setKey("test");

    Axios.get.mockImplementationOnce(() => Promise.resolve());
    Axios.post.mockImplementationOnce(() => Promise.resolve());
});

afterEach(() => {
    jest.clearAllMocks();
});

test('loads successfully and session is created', async () => {
    const warn = jest.spyOn(LOGGER, 'warn');

    //Leya should exist in window
    expect(window.Leya).not.toBe(null);

    //check that session is created
    const s = await Leya.getSession();

    expect(s).not.toBe(null);
});

test('pageview with gdpr details is sent on load event', done => {

    const getUser = jest.spyOn(Leya, 'getUser');

    let u = new User();
    u.gdpr = new Gdpr();

    u.gdpr.gdprDetails = jest.fn();
    u.gdpr.gdprDetails.mockReturnValueOnce({
        getConsentValue: 3,
        vendorList: "test.version",
        consentData: [1],
        vendorData: [1]
    });

    getUser.mockReturnValueOnce(u);

    const setUserGdprConsent = jest.spyOn(Leya, 'setUserGdprConsent');
    const setGdprVendorListVersion = jest.spyOn(Leya, 'setGdprVendorListVersion');
    const recordPageView = jest.spyOn(Leya.Events, 'recordPageView');
    const isSessionOpen = jest.spyOn(Leya, 'isSessionOpen');
    const getSession = jest.spyOn(Leya, 'getSession');
    const getTags = jest.spyOn(Leya, 'getTags');

    //emulate load event
    window.dispatchEvent(new Event("load"));
    setTimeout(function () {
        expect(recordPageView).toHaveBeenCalled();
        expect(setUserGdprConsent).toHaveBeenCalled();
        expect(setGdprVendorListVersion).toHaveBeenCalled();
        expect(getUser).toHaveBeenCalled();
        expect(isSessionOpen).toHaveBeenCalled();
        expect(getTags).toHaveBeenCalled();
        expect(getSession).toHaveBeenCalled();
        done();
    }, 200);

});

test('pageview with default gdpr details is sent on load event', done => {

    const getUser = jest.spyOn(Leya, 'getUser');

    let u = new User();
    u.gdpr = new Gdpr();

    u.gdpr.gdprDetails = jest.fn();
    u.gdpr.gdprDetails.mockReturnValueOnce(undefined);

    getUser.mockReturnValueOnce(u);

    const setUserGdprConsent = jest.spyOn(Leya, 'setUserGdprConsent');
    const setGdprVendorListVersion = jest.spyOn(Leya, 'setGdprVendorListVersion');
    const recordPageView = jest.spyOn(Leya.Events, 'recordPageView');
    const isSessionOpen = jest.spyOn(Leya, 'isSessionOpen');
    const getSession = jest.spyOn(Leya, 'getSession');
    const getTags = jest.spyOn(Leya, 'getTags');

    //emulate load event
    window.dispatchEvent(new Event("load"));
    setTimeout(function () {
        expect(recordPageView).toHaveBeenCalled();
        expect(setUserGdprConsent).not.toHaveBeenCalled();
        expect(setGdprVendorListVersion).not.toHaveBeenCalled();
        expect(getUser).toHaveBeenCalled();
        expect(isSessionOpen).toHaveBeenCalled();
        expect(getTags).toHaveBeenCalled();
        expect(getSession).toHaveBeenCalled();
        done();
    }, 200);

});

test('pageview with default gdpr vendor list is sent on load event', done => {

    const getUser = jest.spyOn(Leya, 'getUser');

    let u = new User();
    u.gdpr = new Gdpr();

    u.gdpr.gdprDetails = jest.fn();
    u.gdpr.gdprDetails.mockReturnValueOnce({
        getConsentValue: 3,
        vendorList: undefined,
        consentData: [1],
        vendorData: [1]
    });

    getUser.mockReturnValueOnce(u);

    const setUserGdprConsent = jest.spyOn(Leya, 'setUserGdprConsent');
    const setGdprVendorListVersion = jest.spyOn(Leya, 'setGdprVendorListVersion');
    const recordPageView = jest.spyOn(Leya.Events, 'recordPageView');
    const isSessionOpen = jest.spyOn(Leya, 'isSessionOpen');
    const getSession = jest.spyOn(Leya, 'getSession');
    const getTags = jest.spyOn(Leya, 'getTags');

    //emulate load event
    window.dispatchEvent(new Event("load"));
    setTimeout(function () {
        expect(recordPageView).toHaveBeenCalled();
        expect(setUserGdprConsent).toHaveBeenCalled();
        expect(setGdprVendorListVersion).not.toHaveBeenCalled();
        expect(getUser).toHaveBeenCalled();
        expect(isSessionOpen).toHaveBeenCalled();
        expect(getTags).toHaveBeenCalled();
        expect(getSession).toHaveBeenCalled();
        done();
    }, 200);

});

test('finishSession is called when before unload fires', done => {
    global.navigator.sendBeacon = jest.fn();
    global.navigator.sendBeacon.mockReturnValueOnce(false);

    const finishSession = jest.spyOn(Leya, 'finishSession');
    const recordSession = jest.spyOn(Leya.Events, 'recordSession');
    const getSession = jest.spyOn(Leya, 'getSession');
    const getUser = jest.spyOn(Leya, 'getUser');
    const getTags = jest.spyOn(Leya, 'getTags');

    setTimeout(function () {
        //emulate beforerunload event
        window.dispatchEvent(new Event("beforeunload"));

        setTimeout(function () {
            expect(finishSession).toHaveBeenCalled();
            expect(recordSession).toHaveBeenCalled();
            expect(getSession).toHaveBeenCalled();
            expect(getUser).toHaveBeenCalled();
            expect(getTags).toHaveBeenCalled();
            expect(Axios.post).toHaveBeenCalled();
            done();
        }, 50);
    }, 50);
});

test('should log warning when session already closed', () => {
    const warn = jest.spyOn(LOGGER, 'warn');

    window.dispatchEvent(new Event("beforeunload"));
    expect(warn).toHaveBeenCalled();
});
