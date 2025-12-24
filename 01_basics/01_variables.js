// Variables in JavaScript - var, let, const

// 1. var - function scoped (older way)
var name = "John";
console.log(name); // Output: John

// 2. let - block scoped (preferred)
let age = 25;
console.log(age); // Output: 25

// 3. const - block scoped, cannot be reassigned
const country = "USA";
console.log(country); // Output: USA

// Examples of reassignment
let score = 100;
score = 150; // This works
console.log(score); // Output: 150

// const cannot be reassigned
// country = "Canada"; // This would throw an error

// Data types
let number = 42;
let decimal = 3.14;
let string = "Hello";
let boolean = true;
let nullValue = null;
let undefinedValue = undefined;

console.log(typeof number); // Output: number
console.log(typeof string); // Output: string
console.log(typeof boolean); // Output: boolean