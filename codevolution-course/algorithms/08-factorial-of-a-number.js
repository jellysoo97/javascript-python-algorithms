// 팩토리얼 : O(n)
function factorial(n) {
  let fac = 1;

  for (let i = 2; i <= n; i++) {
    fac = fac * i;
  }

  return fac;
}

console.log(factorial(0)); // 1
console.log(factorial(5)); // 120
console.log(factorial(6)); // 720
