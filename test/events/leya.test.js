import LeyaEvents from "../../src/events/leya"
import {LeyaClient} from "../../src/api/lc";
import {NoSessionError} from "../../src/core/errors/nosession_error";
import {SessionOpenError} from "../../src/core/errors/sessionopen_error";


//recordView
test("should return NoSessionError when trying to record page view without a session open", async () => {
    let le = new LeyaEvents(new LeyaClient(5000, 2));
    window.Leya = {};
    window.Leya.isSessionOpen = jest.fn();
    window.Leya.isSessionOpen.mockReturnValue(false);

    await expect(async () => await le.recordPageView()).rejects.toThrow(NoSessionError);
});

//recordSession

test("should return NoSessionError when trying to record session without a session open", async () => {
    let le = new LeyaEvents(new LeyaClient(5000, 2));
    window.Leya = {};
    window.Leya.getSession = jest.fn();
    window.Leya.getUser = jest.fn();
    window.Leya.getSession.mockReturnValue(null);

    await expect(async () => await le.recordSession()).rejects.toThrow(NoSessionError);
});

test("should return SessionOpenError when trying to record session without closing a session first", async () => {
    let le = new LeyaEvents(new LeyaClient(5000, 2));
    window.Leya = {};
    window.Leya.getSession = jest.fn();
    window.Leya.getUser = jest.fn();
    window.Leya.getSession.mockReturnValue({finish: null});

    await expect(async () => await le.recordSession()).rejects.toThrow(SessionOpenError);
});