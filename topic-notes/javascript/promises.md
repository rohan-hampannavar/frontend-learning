# Promises

A Promise represents the eventual completion or failure of an async operation.

## States: pending -> fulfilled | rejected

## Patterns
```js
fetch(url).then(r => r.json()).catch(console.error);
const [a, b] = await Promise.all([fetchA(), fetchB()]);
const results = await Promise.allSettled([p1, p2]);
```
