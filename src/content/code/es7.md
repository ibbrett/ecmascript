---
title: 'ES7 ECMAScript 2016'
description: '7th Edition – ECMAScript 2016'
pubDate: 'Jun 01 2016'
---

```js
// The exponentiation (**) operator returns the result of raising the first operand to the power of the second operand. It is equivalent to Math.pow(), except it also accepts BigInts as operands.

// prior to ES7
console.log(Math.pow(3, 4));
// Expected output: 81

console.log(3 ** 4);
// Expected output: 81

console.log(10 ** -2);
// Expected output: 0.01

console.log(2 ** (3 ** 2));
// Expected output: 512

console.log((2 ** 3) ** 2);
// Expected output: 64
```
