// 5. Reverse a string

function reverseString(str) {
  return [...str].reverse().join("");
}

const input = "JavaScript";
console.log("Original string:", input);
console.log("Reversed string:", reverseString(input));
