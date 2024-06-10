// 최소, 최대 2
// 출력: n개의 정수 중 최솟값과 최댓값
// 1. n만큼 loop 돌면서
// 2.   최솟값과 최댓값을 구한다.
const fs = require("fs");
let [n, ...rest] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

for (let i = 0; i < +n; i++) {
  const arr = rest[2 * i + 1].split(" ").map(Number);

  console.log(Math.min(...arr), Math.max(...arr));
}
