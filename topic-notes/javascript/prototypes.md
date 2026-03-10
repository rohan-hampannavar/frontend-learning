# Prototypes

Every JS object has a [[Prototype]] chain. Property lookups walk the chain.

```js
function Animal(name) { this.name = name; }
Animal.prototype.speak = function() { return `${this.name} speaks`; };
const dog = new Animal('Rex');
dog.speak(); // 'Rex speaks'
```

class syntax is syntactic sugar over prototype-based inheritance.
