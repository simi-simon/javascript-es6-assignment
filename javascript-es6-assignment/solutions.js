// JavaScript Basics & ES6 Assignment
// Run with: node solutions.js

// 1. Print numbers from 1 to 10
console.log("1. Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Return the sum of an array of numbers
function sumArray(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}
console.log("\n2. Sum:", sumArray([1, 2, 3, 4, 5]));

// 3. Find the largest number in an array
function findLargest(numbers) {
  if (numbers.length === 0) {
    throw new Error("The array must not be empty.");
  }
  return Math.max(...numbers);
}
console.log("3. Largest number:", findLargest([12, 4, 29, 7, 18]));

// 4. Check whether a number is even or odd
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log("4. 8 is:", evenOrOdd(8));
console.log("   7 is:", evenOrOdd(7));

// 5. Reverse a string
function reverseString(str) {
  return [...str].reverse().join("");
}
console.log("5. Reversed string:", reverseString("JavaScript"));

// 6. Merge two arrays using the spread operator
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log("6. Merged array:", merged); // [1, 2, 3, 4]

// 7. Use ES6 filter to return even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("7. Even numbers:", evenNumbers); // [2, 4, 6]

// 8. Rewrite using template literals
const name = "Alice";
const msg = `Hello ${name}, welcome!`;
console.log("8.", msg);

// 9. Rewrite greet() using an arrow function
const greet = (name) => {
  return "Hello, " + name;
};
console.log("9.", greet("Alice"));
