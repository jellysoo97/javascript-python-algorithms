// 재귀 피보나치 수열 : O(2^n)
// cf) iterative solution : O(n)
// not a good solution for fibonacci sequence
function recursiveFibonacci(n) {
  // base case
  if (n < 2) {
    return n;
  }

  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(6)); // 8
