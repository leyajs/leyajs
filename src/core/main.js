import Core from "./core"

(function (window) {

    //core
    let l = new Core();

    //getKey
    let _getKey = (key) => l.getKey(key);

    //setKey
    let _setKey = (key) => l.setKey(key);

    //startSession
    let _startSession = () => l.startSession();

    //endSession
    let _finishSession = () => l.finishSession();

    //getSession
    let _getSession = () => l.getSession();

    //setTags
    let _setTags = (tags) => l.setTags(tags);

    //getTags
    let _getTags = () => l.getTags();

    //getUser
    let _getUser = () => l.getUser();

    //setUserGdprConsent
    let _setUserGdprConsent = (g) => l.setUserGdprConsent(g);

    //_setGdprVendorList
    let _setGdprVendorListVersion = (v) => l.setGdprVendorListVersion(v);

    //isSessionOpen
    let _isSessionOpen = () => l.isSessionOpen();

    window.Leya = Object.assign({}, window.Leya, {
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
        isSessionOpen: _isSessionOpen
    });

    window.setInterval(async function () {
        let u = await Leya.getUser();

        if (u) {
            let details = u.gdpr.gdprDetails();

            if (details) {
                Leya.setUserGdprConsent(details.getConsentValue);
                if (details.vendorList) {
                    Leya.setGdprVendorListVersion(details.vendorList.vendorListVersion);
                }
            }
        }
    }, 250);

})(window);