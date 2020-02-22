export class Utils {

    static sanitizeTags(tags) {
        if (Array.isArray(tags) && tags.length > 0 && (tags.length % 2) === 0) {
            let jo = {};

            for (let i = 0; i < tags.length; i += 2) {
                jo[tags[i].toLowerCase()] = tags[i + 1].toLowerCase();
            }

            const ordered = {};
            Object.keys(jo).sort().forEach(function (key) {
                ordered[key] = jo[key];
            });

            return Object.entries(ordered).flat();
        }

        return [];
    }

    static emptyArray(arr) {
        return !(Array.isArray(arr) && arr.length);
    }

}

export const EVENT_TYPE = {
    PAGE_VIEW: 'pv',
    SESSION: 's',
    PB_AUCTION: 'pb_a',
    PB_IMPRESSION: 'pb_i',
    PB_BID_AFTER_TIMEOUT: 'pb_bat',
    A9_AUCTION: 'a9_a',
    A9_IMPRESSION: 'a9_i'
};