# this Binding - All 4 Rules

1. Default binding - this = global (or undefined in strict mode)
2. Implicit binding - obj.method() -> this = obj
3. Explicit binding - .call(), .apply(), .bind()
4. new binding - new Foo() -> this = newly created object

Arrow functions have no own this - they inherit from enclosing scope.
