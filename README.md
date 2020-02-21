# leya.js

* **Adding `leya.js` to your page:**

```html
<script src="https://cdn.jsdelivr.net/gh/leya/leyajs/dist/main.js"></script>
```

* **Once it's loaded, add your ingestion key to authenticate your events:**

````javascript

document.addEventListener('DOMContentLoaded', async (event) => {
    
    //set your ingestion key, it's recommended to set it as soon as possible
    await Leya.setKey(YOUR_INGESTION_KEY);
    
    //get configured key
    const k = await Leya.getKey();
   
});

````

* **Leyajs exposes some utility methods that you can use to enrich your events**

````javascript
document.addEventListener('load', async (event) => {
    //add new tags
    //array needs to have an even number of elements (key, value) 
    await Leya.setTags(["key1", "value1", "key2", "value2"].concat(await Leya.getTags()));
    
    //get tags
    const tags = await Leya.getTags();
    
    //set User GDPR Consent
    //NOTE Possible values: 0 User said NO to all, 1 said YES to all, 2 y/n to some, 3 unknown
    await Leya.setUserGdprConsent(1); 
    
    //Get User GDPR Consent
    const consent = await Leya.getUserGdprConsent();
    
    //set GDPR Vendor List Version
    await Leya.Leya.setGdprVendorListVersion("v1.0.0a-c");
    
    //get GDPR Vendor List Version
    const vlv = await Leya.getGdprVendorListVersion();
});

````

## Prebid Integration

- Add our [Prebid Analytics Adapter](https://github.com/Leya/leya-prebid-analytics-adapter) and Leyajs will handle the rest

## A9 Integration

Leyajs exposes several methods that you can use to publish header bidding events. 

If you're using **Prebid**, you can rely on our Analytics Adapter and we'll take care of things for you.

However, if you're using A9, we'll need your help to gather data for us:

* **Auction Event**
````javascript

document.addEventListener('DOMContentLoaded', async (event) => {
    
    //set your ingestion key, it's recommended to set it as soon as possible
    await Leya.setKey(YOUR_INGESTION_KEY);
    
    //initialize Leya's A9 integration
    await Leya.Events.A9.init();
    
    //gather auction data
    let start = new Date().getTime();
    let request = {};//A9 request object
    let response = A9.requestBids(request);//A9 response
    
    let a = {
            start: start,
            finish: new Date().getTime(),
            request: request,
            response: response
        };
    //handle auction event
    Leya.Events.A9.handleAuctionEvent(a);
    
});
````  

* **Impression Event**

Add the following to your A9 Creatives:

````javascript
<script>
    var p = {
    	amzniid: "%%PATTERN:amzniid%%",
    	amznbid: "%%PATTERN:amznbid%%",
    	amznp: "%%PATTERN:amznp%%",
    	slotName: "%%PATTERN:AdUnit%%"
    };
    
    if(Leya) {
    	Leya.Events.A9.handleImpressionEvent(p);
    }
</script>
````
