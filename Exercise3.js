// Yasaman Mirvahabi Sabet
// 101217770
// Lab 2

// Exercise 3:

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');
const colors = ['red', 'green', 'blue'];

const capitalColors = colors.map(color => capitalize(color));


// Example:

console.log(capitalColors);