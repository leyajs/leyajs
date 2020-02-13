export class Gdpr {
    _consented = 3;
    _vendorListVersion;

    get consented() {
        return this._consented;
    }

    set consented(value) {
        this._consented = value;
    }

    get vendorListVersion() {
        return this._vendorListVersion;
    }

    set vendorListVersion(value) {
        this._vendorListVersion = value;
    }

    gdprDetails() {

        const CONSENT_STATUS = {
            "NO_CONSENT": 0,
            "CONSENT": 1,
            "SOME_CONSENT": 2,
            "UNDEFINED": 3
        };

        let vendorData, vendorLists, consentData;
        if (window.__cmp) {
            window.__cmp('getVendorConsents', null, function (result) {
                vendorData = result
            });
            window.__cmp('getVendorList', null, function (result) {
                vendorLists = result
            });
            window.__cmp('getConsentData', null, function (result) {
                consentData = result
            });

            const purpose_consents_aux = (vendorData && vendorData.purposeConsents) || [];
            const vendor_consents_aux = (vendorData && vendorData.vendorConsents) || [];

            const purpose_consents = Object.keys(purpose_consents_aux).map(key => purpose_consents_aux[key]);
            const vendor_consents = Object.keys(vendor_consents_aux).map(key => vendor_consents_aux[key]);

            function isConsentUndefined() {
                return purpose_consents.length === 0 && vendor_consents.length === 0;
            }

            function isConsentGiven() {
                const notAcceptedAnyPurpose = purpose_consents.every(purpose => purpose === false);
                const notAcceptedAnyVendor = vendor_consents.every(vendor => vendor === false);
                const consentNotGiven = notAcceptedAnyPurpose || notAcceptedAnyVendor;
                return !consentNotGiven;
            }

            function getConsentValue() {
                let consent;
                if (isConsentUndefined()) {
                    consent = CONSENT_STATUS.UNDEFINED;
                } else if (isConsentGiven()) {
                    consent = CONSENT_STATUS.CONSENT;
                } else {
                    consent = CONSENT_STATUS.NO_CONSENT;
                }
                return consent;
            }

            return {
                getConsentValue: getConsentValue(),
                vendorList: vendorLists,
                consentData: consentData,
                vendorData: vendorData
            };
        } else {
            return {
                getConsentValue: CONSENT_STATUS.UNDEFINED
            }
        }
    }
}
