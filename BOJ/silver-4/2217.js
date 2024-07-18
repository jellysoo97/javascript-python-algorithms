// 로프
// 출력: 로프를 이용하여 들어올릴 수 있는 물체의 최대 중량
// N개의 로프가 병렬로 들어올릴 수 있는 최대 중량 = k개 중 최소 로프 * k
// 로프 내림차순 정렬
// 로프[i] * (i+1)의 최댓값
const fs = require("fs");
let [N, ...inputs] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const ropes = inputs.map(Number).sort((a, b) => b - a);

console.log(Math.max(...ropes.map((rope, i) => rope * (i + 1))));
