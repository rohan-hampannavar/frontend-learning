# Closures

A closure is a function that remembers variables from its outer scope even after that scope has finished executing.

## 3 Real Use Cases
1. Data privacy - hide variables from global scope
2. Factory functions - create specialised functions
3. Memoisation - cache expensive results

## Example
```js
function counter() {
  let count = 0;
  return { increment: () => ++count, value: () => count };
}
const c = counter();
c.increment(); c.increment();
console.log(c.value()); // 2
```

## Gotchas
- Loop + var creates one shared closure (use let or IIFE to fix)
- Closures can cause memory leaks if you hold large objects unnecessarily
