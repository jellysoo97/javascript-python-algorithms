// #1475
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

// input -> arr 변환, num === 9이면 6으로 바꾸기
const arr = input
  .split("")
  .map((str) => +str)
  .map((num) => (num === 9 ? 6 : num));
// 각 숫자가 나온 개수를 세는 count object
// sol2) 배열의 인덱스로 처리하는 방법

let count = {};

// arr for loop
// count[num] 없으면 1
// count[num] 있으면 count[num]++
arr.forEach((num) => (count[num] ? count[num]++ : (count[num] = 1)));

if (count[6]) {
  count[6] = Math.ceil(count[6] / 2);
}

console.log(Math.max(...Object.entries(count).map(([_, value]) => value)));
