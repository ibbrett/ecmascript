---
title: 'ES9 ECMAScript 2018'
description: '9th Edition – ECMAScript 2018'
pubDate: 'Jun 01 2018'
---

```bash
// The spread operator allows for the easy copying of object properties, as shown below.
let object = {a: 1, b: 2}

let objectClone = Object.assign({}, object) // before ES2018
let objectClone = {...object} // ES2018 syntax

let otherObject = {c: 3, ...object}
// Expected output: true {c: 3, a: 1, b: 2}
```

```js
// ES9 ECMAScript 2018 introduced the /ds (dotAll) flag
// The dotAll accessor property of RegExp instances returns whether or not the s flag is used with this regular expression

const reg1 = /pro/s; // new RegExp('pro', 's');
console.log(reg1.dotAll);
// Expected output: true

const reg2 = /pro/; // new RegExp('pro');
console.log(reg2.dotAll);
// Expected output: false

```
