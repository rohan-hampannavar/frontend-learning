# async / await

async functions always return a Promise.
await pauses execution until the Promise resolves.

## Error handling
```js
async function getData() {
  try {
    const res  = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) { console.error(err); }
}
```

## Sequential vs parallel
```js
// Sequential (slow)
const a = await fetchA();
const b = await fetchB();

// Parallel (fast)
const [a, b] = await Promise.all([fetchA(), fetchB()]);
```
