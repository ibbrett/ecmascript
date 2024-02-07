---
title: 'ES6 ECMAScript 2015'
description: '6th Edition – ECMAScript 2015, aka ES6 Harmony'
pubDate: 'Jun 17 2015'
---

```js
// block scope changed between ES5 and ES6 with the introduction of let and const
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log("The value of i:" + i);
// Expected output ES6: Uncaught ReferenceError: i is not defined

function definedA(flag) {
    a = 10;
    if (flag) {
        let a = 20;
    }
    return a;
}
console.log(definedA(false));
console.log(definedA(true));
// Expected output ES6: 10, 10

function undefinedA(flag) {
    if (flag) {
        let a = 10;
    }
    return a;
}
console.log(undefinedA(true));
// Expected output ES6: ReferenceError: a is not defined
```

```js
// test lastIndex with a regular expression with /g (global), /i (ignoreCase) flags

const str = 'Quid Pro Quo, Pro Bono';
let re = /pro/ig;

re.test(str);
console.log('lastIndex: ' + re.lastIndex);
// Expected output: 8, where to set index for start of next match, the space after the first 'Pro'

re.test(str);
console.log('lastIndex: ' + re.lastIndex);
// Expected output: 17, where to set index for start of next match, the space after the second 'Pro'

re.test(str);
console.log('lastIndex: ' + re.lastIndex);
// Expected output: 0, 'Pro' not found, reset lastIndex to 0

re.test(str);
console.log('lastIndex: ' + re.lastIndex);
// Expected output: 8, lastIndex was reset back to 0. Therefore, first 'Pro' found again

// ES6 ECMAScript 2015 introduced the /y (sticky) flag
// For some tasks, including the lexical analysis, we need to find a match exactly at the given position at the text, not somewhere after it. And that’s what the flag y is for.
// keep in mind: The 'Y' flag, or sticky flag, makes a regex match exactly at position lastIndex, not “starting from” it.
// let's redefine our regular expression and use exec to find a word

re = /\w+/y; // match a word

console.log( 'Is sticky flag set: ' + re.sticky );
// Expected output: true

console.log( re.exec(str) ); 
// Expected output: 'Quid' is found at index 0, re.lastIndex is set to 4, the space after 'Quid'

console.log( 'lastIndex: ' + re.lastIndex ); 
// Expected output: 4, lastIndex is set to 4, the space after 'Quid'

console.log( re.exec(str) ); 
// Expected output: null, this is because The flag 'y' makes regexp.exec(str) search strictly at position lastIndex, not "starting from" it. In this case the index was set to 4 after the first match and index 4 contains a space, not a word.

re.lastIndex = 5;
console.log( 'lastIndex: ' + re.lastIndex ); 
// Expected output: 5, we just set lastIndex to 5, where the next word starts

console.log( re.exec(str) ); 
// Expected output: 'Pro'
```

```js
// ES6 ECMAScript 2015 introduced the /u (unicode) flag

// RegExp.prototype.unicode has the value true if the u flag was used; otherwise, false. The u flag enables various Unicode-related features. With the "u" flag:

// Any Unicode code point escapes (\u{xxxx}, \p{UnicodePropertyValue}) will be interpreted as such instead of identity escapes. For example /\u{61}/u matches "a", but /\u{61}/ (without u flag) matches "u".repeat(61), where the \u is equivalent to a single u.

const regex1 = new RegExp('\u{61}');
const regex2 = new RegExp('\u{61}', 'u');
const str2 = "a";

console.log(regex1.unicode);
// Expected output: false

console.log(regex2.unicode);
// Expected output: true

console.log(regex1.source);
// Expected output: "a"

console.log(regex2.source);
// Expected output: "a"

console.log(regex2.exec(str2));
// Expected output: "a"

console.log(regex2.test(str2));
// Expected output: true

console.log(str2.match(regex2));
// Expected output: "a"

console.log(str2.search(regex2));
// Expected output: 0
```

```js
// the spread operator
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
```

```js
// Exponentiation: Math.pow()
console.log(Math.pow(3, 4));
// Expected output: 81

console.log(Math.pow(10, -2));
// Expected output: 0.01

console.log(Math.pow(2, (Math.pow(3, 2))));
// Expected output: 512

console.log(Math.pow((Math.pow(2, 3)), 2));
// Expected output: 64
```
