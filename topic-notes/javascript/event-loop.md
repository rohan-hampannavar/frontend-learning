# Event Loop

## Mental model
Call Stack -> Web APIs -> Callback Queue -> Event Loop -> Call Stack
Microtasks (Promises) drain before macrotasks (setTimeout).

## Example
```js
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
// Output: 1 -> 4 -> 3 -> 2
```
