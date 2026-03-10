# Bug 004 - Redux State Mutation

## What broke
UI not updating after action dispatched.

## Why
Mutated state directly in reducer outside RTK Immer context. Same reference = no update.

## Fix
Always return new object/array, or use RTK createSlice (wraps Immer):
```js
// Bad (plain reducer without Immer)
state.items.push(newItem);

// Good
return { ...state, items: [...state.items, newItem] };
```
