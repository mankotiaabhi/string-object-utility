# JavaScript String & Object Functions 

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

#### `split(separator)`
Splits a string into an array.

```js
console.log("a,b,c".split(",")); // ["a", "b", "c"]
console.log("hello".split("")); // ["h","e","l","l","o"]
```

#### `replace(searchValue, replaceValue)`
Returns a new string with the first occurrence replaced (or all occurrences if using a global regex).

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

### Popular object utility methods

#### `Object.keys(obj)`
Returns an array of the object's own enumerable property names (keys).

```js
const user = { name: "Aisha", age: 27 };
console.log(Object.keys(user)); // ["name", "age"]
```

#### `Object.values(obj)`
Returns an array of the object's own enumerable property values.

```js
const user = { name: "Aisha", age: 27 };
console.log(Object.values(user)); // ["Aisha", 27]
```

#### `Object.entries(obj)`
Returns an array of the object's own enumerable property [key, value] pairs.

```js
const user = { name: "Aisha", age: 27 };
console.log(Object.entries(user)); // [["name","Aisha"],["age",27]]
```

#### `Object.assign(target, ...sources)`
Copies the values of all enumerable own properties from one or more source objects to a target object. It returns the target object. This is commonly used for shallow cloning or merging objects.

```js
const defaults = { theme: "light", fontSize: 14 };
const prefs = Object.assign({}, defaults, { theme: "dark" });
// prefs => { theme: "dark", fontSize: 14 }
```

#### Deep copy (structuredClone / JSON)
Creates a deep copy of an object so nested objects/arrays are also cloned. `structuredClone` is the modern built-in API, while `JSON.parse(JSON.stringify(obj))` is a simpler fallback for JSON-safe data.

```js
const user = { name: "Aisha", prefs: { theme: "dark" } };
const copy = structuredClone(user);
copy.prefs.theme = "light";
console.log(user.prefs.theme); // "dark" (original unchanged)

const jsonCopy = JSON.parse(JSON.stringify(user));
jsonCopy.prefs.theme = "blue";
console.log(user.prefs.theme); // "dark" (original unchanged)
```

#### `Object.freeze(obj)`
Freezes an object, preventing new properties from being added to it, existing properties from being removed, and existing properties from being changed. It returns the same object that was passed in.

```js
const conf = Object.freeze({ name: "Immutable" });
conf.name = "X"; // throws TypeError in strict mode, ignored in non-strict mode
```

#### `Object.seal(obj)`
Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

```js
const sealed = Object.seal({ a: 1 });
sealed.a = 2; // works
sealed.b = 3; // ignored
```

#### `Object.hasOwn(obj, prop)` (ES2022)
Returns a boolean indicating whether the object has the specified property as its own property (not inherited from its prototype chain).

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