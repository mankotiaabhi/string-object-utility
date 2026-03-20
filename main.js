const proto = { sayHi() { return "hi"; } };
const obj = Object.create(proto);
console.log(obj); // "hi"