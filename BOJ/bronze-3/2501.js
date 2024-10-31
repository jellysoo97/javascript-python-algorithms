// 약수 구하기
// 브루트포스
// 1~N까지 나누어 떨어지는 수 = 약수
const fs = require("fs");
let [N, K] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let divisor = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) divisor.push(i);
}

console.log(divisor.length < K ? 0 : divisor[K - 1]);
