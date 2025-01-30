function foo(a, b) {
  // Explicit null checks
  const numA = a !== null ? a : 0;
  const numB = b !== null ? b : 0;
  return numA + numB; 
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(10, null)); // Output: 10
console.log(foo(10, 5)); // Output: 15
console.log(foo(null, null)); // Output: 0