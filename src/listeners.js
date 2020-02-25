//default config

window.addEventListener('load', async (event) => {
    //set consent f
    let f = async function (u) {
        if (u) {
            let details = u.gdpr.gdprDetails();

            if (details) {
                await Leya.setUserGdprConsent(details.getConsentValue);
                if (details.vendorList) {
                    await Leya.setGdprVendorListVersion(details.vendorList.vendorListVersion);
                }
            }
        }
    };

    //get consent
    let u = await Leya.getUser();
    //set consent
    await f(u);

    //refresh consent
    window.setInterval(async function () {
        let u = await Leya.getUser();
        await f(u);
    }.bind(this), 250);

    //record page view
    await Leya.Events.recordPageView();
});

window.addEventListener('beforeunload', async (event) => {
    //attempt to close session
    await Leya.finishSession();

    delete event['returnValue'];

});