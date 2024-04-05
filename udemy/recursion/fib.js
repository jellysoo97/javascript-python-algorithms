function fib(num) {
  // base case
  if (num <= 2) return 1;

  // different input
  return fib(num - 2) + fib(num - 1);
}

console.log(fib(4));
console.log(fib(10));
