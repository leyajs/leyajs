export class Gdpr {
    _consented = 0;
    _vendorListVersion = -1;

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
}
