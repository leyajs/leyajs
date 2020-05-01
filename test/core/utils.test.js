import {Utils} from "../../src/core/utils"

let languagesGetter;
let userAgentGetter;

beforeEach(() => {
    languagesGetter = jest.spyOn(window.navigator, 'languages', 'get');
    userAgentGetter = jest.spyOn(window.navigator, 'userAgent', 'get');
});


test('should return desktop device type', async () => {
    userAgentGetter.mockReturnValue("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36");

    const t = Utils.getDeviceType();

    expect(t).toBe("desktop");
});

test('should return mobile device type', async () => {
    userAgentGetter.mockReturnValue("Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19");

    const t = Utils.getDeviceType();

    expect(t).toBe("mobile");
});

test('should return tablet device type', async () => {
    userAgentGetter.mockReturnValue("Mozilla/5.0 (Linux; Android 4.1.2; MediaPad 10 LINK Build/HuaweiMediaPad) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.122 Safari/537.36");

    const t = Utils.getDeviceType();

    expect(t).toBe("tablet");
});

test('should return bot device type', async () => {
    userAgentGetter.mockReturnValue("Mozilla/5.0 (Linux; Android 5.0; SM-G920A) AppleWebKit (KHTML, like Gecko) Chrome Mobile Safari (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)");

    const t = Utils.getDeviceType();

    expect(t).toBe("bot");
});

test('should return default device type', async () => {
    userAgentGetter.mockReturnValue("");

    const t = Utils.getDeviceType();

    expect(t).toBe("desktop");
});

test('should return correct language', async () => {
    languagesGetter.mockReturnValue(["en", "pt"]);

    const lan = Utils.getBrowserLanguage();

    expect(lan).toBe("en");
});

test('should return correct language', async () => {
    languagesGetter.mockRejectedValue(new Error());

    const lan = Utils.getBrowserLanguage();

    expect(lan).toBe("unknown");
});


