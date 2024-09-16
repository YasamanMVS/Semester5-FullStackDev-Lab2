// Yasaman Mirvahabi Sabet
// 101217770
// Lab 2

// Exercise 2:

// Only capitalizing the first letter and ignoring the rest
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');

// Capitalizing the first letter and make the rest lower case
const capLow = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();


// Example:

console.log("First Model:");
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

console.log("Second Model:");
console.log(capLow('fooBar'));
console.log(capLow('nodeJs'));