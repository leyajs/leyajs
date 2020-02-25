//default config

document.addEventListener('DOMContentLoaded', async (event) => {
    //start session
    await Leya.startSession();
});

window.addEventListener('load', async (event) => {
    //set consent f
    let f = function (u) {
        if (u) {
            let details = u.gdpr.gdprDetails();

            if (details) {
                Leya.setUserGdprConsent(details.getConsentValue);
                if (details.vendorList) {
                    Leya.setGdprVendorListVersion(details.vendorList.vendorListVersion);
                }
            }
        }
    };

    //get consent
    let u = await Leya.getUser();
    //set consent
    f(u);

    //refresh consent
    window.setInterval(async function () {
        let u = await Leya.getUser();
        f(u);
    }.bind(this), 250);

    //record page view
    await Leya.Events.recordPageView();
});

window.addEventListener('beforeunload', async (event) => {
    //attempt to close session
    await Leya.finishSession();

    delete event['returnValue'];

});