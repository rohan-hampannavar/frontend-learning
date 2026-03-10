# Bug 002 - useEffect Infinite Loop

## What broke
Page kept fetching in an infinite loop. Hundreds of network requests.

## Why
Object/array in dependency array. React shallow-compares: {} !== {} every render, so effect ran every render.

## Fix
Use primitive values in dep array, or useMemo/useCallback to stabilise references.
```js
// Bad
useEffect(() => { fetch(config); }, [config]); // object recreated every render

// Good
useEffect(() => { fetch(url); }, [url]); // stable primitive
```
