// Power of two : O(logn)
// n이 2의 거듭제곱 수인지
// sol1
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }

    n = n / 2;
  }

  return true;
}

// 최적화 sol2
// & 연산자 이용해서 비트연산 : O(1)
// ex) 8 = 1000, 7 = 111 -> & 연산 시 둘 다 1인 경우만 1
// 거듭제곱의 경우 모두 0이 나오게 되어있음
function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false
