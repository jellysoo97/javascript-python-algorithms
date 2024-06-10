// 과제 안 내신 분
// 출력: 입력값 중 없는 번호를 오름차순으로 출력
// 1. 길이가 30인 번호 배열을 0으로 채운다.
// 2. 번호 loop을 돌면서
// 3.   배열[번호] = 1로 변경한다.
// 4. 번호 배열 중 값이 0인 인덱스 + 1을 출력한다.
const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n")
  .map((str) => +str);
let arr = Array(30).fill(0);
let result = [];

for (const num of input) {
  arr[num - 1] = 1;
}

arr.forEach((done, index) => {
  !done && result.push(index + 1);
});

result.forEach((num) => console.log(num));
