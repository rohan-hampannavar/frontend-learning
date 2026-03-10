# TypeScript Utility Types

| Type | What it does |
|------|-------------|
| Partial<T>   | All props optional |
| Required<T>  | All props required |
| Readonly<T>  | All props read-only |
| Pick<T, K>   | Keep only keys K |
| Omit<T, K>   | Remove keys K |
| Record<K, V> | Object with keys K and values V |
| ReturnType<F>| Return type of function |

```ts
type UpdateUser = Partial<Pick<User, 'name' | 'email'>>;
```
