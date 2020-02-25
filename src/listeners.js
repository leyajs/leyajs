//default config

window.addEventListener('load', (event) => {
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
    Leya.getUser().then(u => {
        //set consent
        f(u);
    });

    //refresh consent
    window.setInterval(function () {
        Leya.getUser().then(u => {
            f(u);
        });
    }.bind(this), 250);

    //record page view
    Leya.Events.recordPageView();
});

window.addEventListener('beforeunload', (event) => {
    //attempt to close session
    Leya.finishSession()
        .then(() => LOGGER.info("Session closed"));

    delete event['returnValue'];
});