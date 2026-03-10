# useEffect Deep Dive

## Dependency array rules
- [] - run once on mount
- [dep] - run on mount + whenever dep changes
- no array - run after every render (dangerous)

## Cleanup
```js
useEffect(() => {
  const id = setInterval(() => tick(), 1000);
  return () => clearInterval(id);
}, []);
```
