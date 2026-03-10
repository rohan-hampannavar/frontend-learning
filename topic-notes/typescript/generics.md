# TypeScript Generics

```ts
function identity<T>(arg: T): T { return arg; }
identity<string>('hello');
identity<number>(42);

interface ApiResponse<T> { data: T; status: number; message: string; }
type UserResponse = ApiResponse<User>;
```
