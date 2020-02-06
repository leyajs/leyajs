//default config

document.addEventListener('DOMContentLoaded', async (event) => {
    //start session
    await Leya.startSession();
});

window.addEventListener('DOMContentLoaded', async (event) => {
    //record page view
    await Leya.Events.recordPageView();
});

window.addEventListener('beforeunload', async (event) => {
    //attempt to close session
    await Leya.finishSession();

    delete event['returnValue'];

});