---
title: 'ES5 ECMAScript 2009'
description: '5th Edition – ECMAScript 2009'
pubDate: 'Dec 03 2009'
---

```js
// block scope
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log("The value of i:" + i);
// Expected output ES5: 10

function definedA(flag) {
    a = 10;
    if (flag) {
        var a = 20;
    }
    return a;
}
console.log(definedA(false));
console.log(definedA(true));
// Expected output ES5: 10, 20

function undefinedA(flag) {
    if (flag) {
        var a = 10;
    }
    return a;
}
console.log(undefinedA(true));
// Expected output ES5: 10
```

```js
// additional to ES5: trim, charAt, array methods
var untrimmed = " Memento mori ";
console.log('untrimmed: "' + untrimmed + '"');
// Expected output: untrimmed: " Memento mori "

var trimmed = untrimmed.trim();
console.log('trimmed: "' + trimmed + '"');
// Expected output: trimmed: "Memento mori"

var secondChar = trimmed.charAt(1);
console.log('second char: ' + secondChar);
// Expected output: second char: e

var nums = [1, 2, 3, 4, 5];
console.log('nums is an array: ' + Array.isArray(nums));
// Expected output: nums is an array: true

nums.forEach(function (num) {
    console.log('num: ' + num);
});
// Expected output: 
num: 1
num: 2
num: 3
num: 4
num: 5
```
