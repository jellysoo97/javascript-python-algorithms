// 트로피 진열
// 출력: 왼쪽, 오른쪽에서 봤을 때 보이는 트로피 개수
// 왼쪽 -> 앞부터 loop, 오른쪽 -> 뒤부터 loop
// 값이 max보다 크면 count, max 업데이트
const fs = require("fs");
let [N, ...inputs] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const trophies = inputs.map(Number);
let left = 1;
let right = 1;
let max = trophies[0];

for (let i = 1; i < trophies.length; i++) {
  if (trophies[i] > max) {
    left++;
    max = trophies[i];
  }
}

max = trophies[trophies.length - 1];
for (let i = trophies.length - 1; i >= 0; i--) {
  if (trophies[i] > max) {
    right++;
    max = trophies[i];
  }
}

console.log(left);
console.log(right);
