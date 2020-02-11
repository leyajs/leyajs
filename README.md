# leya.js

* **Adding `leya.js` to your page:**

```html
<script src="https://cdn.jsdelivr.net/gh/leyajs/leyajs/dist/main.js"></script>
```

* **Adding your ingestion key**

```javascript
await Leya.setKey(YOUR_INGESTION_KEY);
```

* **Getting configured key**

```javascript
await Leya.getKey();
```

* **Adding key-value entries**

```javascript
await Leya.setTags(["key1", "value1", "keya2", "value2"]);

//array needs to have an even number of elements (key, value) 
```

* **Getting key-value entries**

```javascript
await Leya.getTags();
```

* **Setting user GDPR Consent**

```javascript
//NOTE Possible values: 0 User said NO to all, 1 said YES to all, 2 y/n to some, 3 unknown

await Leya.setUserGdprConsent(1); 

```

* **Getting user GDPR Consent**

```javascript
//NOTE Possible values: 0 User said NO to all, 1 said YES to all, 2 y/n to some, 3 unknown

await Leya.getUserGdprConsent(); 

```

* **Setting GDPR Vendor List Version**

```javascript

await Leya.Leya.setGdprVendorListVersion("v1.0.0a-c"); 

```

* **Getting DPR Vendor List Version**

```javascript

await Leya.getGdprVendorListVersion(); 

```