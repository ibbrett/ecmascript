---
title: 'ES8 ECMAScript 2017'
description: '8th Edition – ECMAScript 2017'
pubDate: 'Jun 01 2017'
---

- Object methods: values(), entries() 
- Object.getOwnPropertyDescriptors()
  - static method returns all own property descriptors of a given object.
- async / await 
  - constructions which use generators and promises
- string padding
  - myString.padStart(2); // padEnd()
- additional features for concurrency: Atomics and shared memory
  - It introduces a new constructor <i>SharedArrayBuffer</i> and a namespace object <i>Atomics</i> with helper functions
  - The SharedArrayBuffer global object essentially stores data in a shared memory space. To help avoid race conditions, the Atomics global object provides various methods to lock the shared memory when a thread is using its data. It also provides methods to update the data in that shared memory safely.
- trailing commas for function parameters
  - function test(a,b,c,){}

