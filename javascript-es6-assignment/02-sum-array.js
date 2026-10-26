// 2. Return the sum of an array of numbers

function sumArray(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers);
console.log("Sum:", sumArray(numbers));
