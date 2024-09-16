// Yasaman Mirvahabi Sabet
// 101217770
// Lab 2

// Exercise 5:

const array = [1, 2, 3, 4];

// Sum
const calculateSum = array.reduce((acc, curr) => acc + curr, 0);

// Product
const calculateProduct = array.reduce((acc, curr) => acc * curr, 1);

// Example:
console.log(calculateSum);
console.log(calculateProduct);