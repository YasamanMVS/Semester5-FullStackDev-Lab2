// Yasaman Mirvahabi Sabet
// 101217770
// Lab 2

// Exercise 1:

const greeter = (myArray, counter) => {
    const greetingText = 'Hello!';
    for (const item of myArray) {
        console.log(`${greetingText} ${item}`);
    }
};

// Example:

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);