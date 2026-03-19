# JavaScript String & Object Functions 

**Author:** Abhay Singh Mankotia

## Strings (immutable)
Strings are **immutable**: methods return new strings and do not change the original.

```js
const s = "hello";
s.toUpperCase();
console.log(s); // "hello"
```

### Popular string utility methods

#### `length`
Returns the number of characters in the string.

```js
const text = "JavaScript";
console.log(text.length); // 10
```

#### `toUpperCase()` / `toLowerCase()`
Return a new string in uppercase or lowercase.

```js
console.log("Hello".toUpperCase()); // "HELLO"
console.log("Hello".toLowerCase()); // "hello"
```

#### `trim()`
Removes whitespace from the start and end.

```js
console.log("  hi  ".trim()); // "hi"
```

#### `includes(search, position)`
Returns `true` if the string contains the substring.

```js
console.log("apple".includes("pp")); // true
console.log("apple".includes("pp", 2)); // false
```

#### `indexOf(search, fromIndex)`
Returns the first index of a substring, or `-1` if not found.

```js
console.log("banana".indexOf("an")); // 1
console.log("banana".indexOf("x")); // -1
```

#### `slice(start, end)`
Extracts a section from a string.

```js
console.log("JavaScript".slice(0, 4)); // "Java"
console.log("JavaScript".slice(4)); // "Script"
```

#### `split(separator, limit)`
Splits a string into an array.

```js
console.log("a,b,c".split(",")); // ["a", "b", "c"]
console.log("hello".split("")); // ["h","e","l","l","o"]
```

#### `replace(searchValue, replaceValue)`
Returns a new string with substitutions.

```js
console.log("foo bar".replace("foo", "baz")); // "baz bar"
console.log("foo foo".replace(/foo/g, "bar")); // "bar bar"
```

---

## Objects (mutable)
Objects are **mutable**: you can change, add, or remove properties.

### Object Creation

#### Object Literal
```js
const user = { name: "Aisha", age: 27 };
```

#### Mutating an object
```js
user.age = 28;        // change a property
user.city = "NY";   // add a property
delete user.city;     // remove a property
```

#### `Object.create(proto)`
```js
const proto = { sayHi() { return "hi"; } };
const obj = Object.create(proto);
console.log(obj.sayHi()); // "hi"
```

---

### Popular object utility methods

### `Object.keys(obj)` / `Object.values(obj)` / `Object.entries(obj)`
- Useful to iterate keys/values/pairs.

```js
const user = { name: "Aisha", age: 27 };
console.log(Object.keys(user)); // ["name", "age"]
console.log(Object.values(user)); // ["Aisha", 27]
console.log(Object.entries(user)); // [["name","Aisha"],["age",27]]
```

### `Object.assign(target, ...sources)`
- Shallow copy properties from sources into target.

```js
const defaults = { theme: "light", fontSize: 14 };
const prefs = Object.assign({}, defaults, { theme: "dark" });
// prefs => { theme: "dark", fontSize: 14 }
```

### `Object.freeze(obj)` / `Object.seal(obj)`
- Prevent modifications.

```js
const conf = Object.freeze({ name: "Immutable" });
conf.name = "X"; // ignored in strict mode throws

const sealed = Object.seal({ a: 1 });
sealed.a = 2; // works
sealed.b = 3; // ignored
```

### `Object.hasOwn(obj, prop)` (ES2022)
- Checks if a property exists directly on the object (not in prototype).

```js
const obj = { x: 1 };
Object.hasOwn(obj, "x"); // true
Object.hasOwn(obj, "toString"); // false
```

---

## Quick Practical Examples

### Convert object to string and back
```js
const data = { name: "Ali", score: 95 };
const json = JSON.stringify(data);
const parsed = JSON.parse(json);
```

### Use strings to build object keys
```js
const scoreType = "math";
const result = { [scoreType]: 99 };
console.log(result.math); // 99
```

---