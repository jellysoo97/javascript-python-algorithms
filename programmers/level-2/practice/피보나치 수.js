// 피보나치 수
// 출력: n번째 피보나치 수를 1234567로 나눈 나머지
// F(n) = F(n-1) + F(n-2), F(0) = 0, F(1) = 1
// sol1 : 재귀 -> 시간초과
// base case: n <= 2, n === 2 ? return n - 1 : return n
// different input: return F(n-1) + F(n-2)
// function solution(n) {
//   function recursion(k) {
//     if (k <= 2) return k === 2 ? k - 1 : k;

//     return recursion(k - 1) + recursion(k - 2);
//   }

//   return recursion(n) % 1234567;
// }

// sol2
// 2 <= n <= 100,000 -> BigInt 고려해야 함, 15자리(10^15)를 넘어가면 Number 타입으로 정확한 정수를 보장하기 어려움
// 나머지를 넣기
function solution(n) {
  let fibonacci = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % 1234567;
  }

  return fibonacci[n];
}

console.log(solution(3));
console.log(solution(5));
