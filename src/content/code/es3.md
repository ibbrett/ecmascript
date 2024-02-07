---
title: 'ES3 ECMAScript 1999'
description: '3th Edition – ECMAScript 1999'
pubDate: 'Dec 01 1999'
---

<a href="https://exploringjs.com/impatient-js/ch_regexps.html#creating-regular-expressions" target="_blank">creating regular expressions</a>
```js
// ES3 supported flags: m, i, g
var reg = /pro/ig; // new RegExp('pro', 'ig');
var str = 'Quid Pro Quo, Pro Bono';
var subStr = 'In Exchange For';

// returns boolean - is there a match?
reg.test(str);
// Expected output: true

// returns a match object for the first match of regExp in str
// run a second time it returns the second match found, and so on
reg.exec(str);
Expected output: ['Pro', index: 14, input: 'Quid Pro Quo, Pro Bono', groups: undefined]

// returns matched values
str.match(reg);
Expected output: ['Pro', 'Pro']

// returns index of first match found
str.search(reg);
Expected output: 5

// string replace
str.replace(reg, subStr);
Expected output: 'Quid In Exchange For Quo, In Exchange For Bono'

// properties
reg.source    // Expected output: 'pro'
reg.flags     // Expected output: 'gi'
reg.lastIndex // Expected output: 0
```

```js
// the try statement

try {
  nonExistentFunction();
}
catch (error) {
  console.error(error);
} finally {
  console.error("This occurs regardless of whether an exception was thrown or caught.");
} 
// Expected output: 
ReferenceError: nonExistentFunction is not defined
This occurs regardless of whether an exception was thrown or caught.
```
