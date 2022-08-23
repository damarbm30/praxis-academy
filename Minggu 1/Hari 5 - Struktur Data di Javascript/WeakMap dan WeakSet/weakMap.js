let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)
console.log(weakMap.has(obj));

// can't use a string as the key
// weakMap.set("test", "Whoops"); // Error, because "test" is not an object

let john = { name: "John" };

let newWeakMap = new WeakMap();
newWeakMap.set(john, "...");

// john = null; // overwrite the reference

newWeakMap.set(john, "secret documents");
// if john dies, secret documents will be destroyed automatically

console.log(newWeakMap.get(john));
