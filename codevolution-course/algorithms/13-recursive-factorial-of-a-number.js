// 재귀 팩토리얼 : O(n)
function recursiveFactorial(n) {
  // base case
  if (n === 0) {
    return 1;
  }

  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(5)); // 120
