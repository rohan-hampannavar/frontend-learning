# JavaScript Interview Questions

### 1. What is a closure?
A closure is a function that retains access to variables from its outer scope after that scope has exited. Useful for data privacy, factory functions, and memoisation.

### 2. Explain the event loop.
JS is single-threaded. The event loop checks: if call stack is empty, pull from microtask queue (Promises) first, then macrotask queue (setTimeout, I/O).

### 3. == vs ===?
== coerces types before comparing. === checks type AND value. Always use ===.

### 4. The four rules of this binding?
Default, implicit (obj.method()), explicit (.call/.bind), and new. Arrow functions inherit this from enclosing scope.

### 5. var vs let vs const?
var is function-scoped and hoisted. let and const are block-scoped. const prevents reassignment (not mutation).

### 6. What is event delegation?
Attaching one listener to a parent instead of many on children. Uses event bubbling. Efficient for dynamic lists.

### 7. null vs undefined?
undefined = declared but not assigned. null = explicitly set to empty.

### 8. Promise.all vs Promise.allSettled?
Promise.all rejects as soon as any promise rejects. Promise.allSettled waits for all and returns statuses.

### 9. What is the prototype chain?
Every JS object has [[Prototype]]. Property lookups walk the chain until found or null is reached.

### 10. Debounce vs throttle?
Debounce delays until after a pause (search input). Throttle limits to once per interval (scroll handler).
