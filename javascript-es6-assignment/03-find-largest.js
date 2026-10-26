// 3. Find the largest number in an array

function findLargest(numbers) {
  if (numbers.length === 0) {
    throw new Error("The array must not be empty.");
  }
  return Math.max(...numbers);
}

const numbers = [12, 4, 29, 7, 18];
console.log("Array:", numbers);
console.log("Largest number:", findLargest(numbers));
