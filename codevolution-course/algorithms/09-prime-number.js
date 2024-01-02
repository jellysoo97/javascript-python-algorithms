// 소수 : O(n)
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  // 최적화 optimized : O(sqrt(n))
  // n = a * b 식에서 둘 중 하나는 무조건 n루트보다 작으므로 n까지 루프를 돌 필요가 없음
  // 작은 쪽 약수만 확인하면 되니까
  // for (let i = 2; i < Math.sqrt(n); i++) {
  //   if (n % i === 0) {
  //     return false;
  //   }
  // }

  return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false
