// ATM
// 각 사람이 돈을 인출하는데 필요한 시간 합의 최소
// 누적합 최소 -> 적은 수를 먼저 더해야 한다
// 1. 인출 시간 배열을 오름차순 정렬
// 2. 누적합의 합 구하기
const fs = require("fs");
let [n, time] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");
let sum = 0;

time = time
  .split(" ")
  .map((str) => +str)
  .sort((a, b) => a - b);

time.forEach((t, index) => {
  sum += t * (parseInt(n) - index);
});

console.log(sum);
