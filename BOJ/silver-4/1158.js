// 요세푸스 문제
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();

const [n, k] = input.split(" ").map((str) => +str);
let people = new Array(n).fill(0).map((_, index) => index + 1);
let pointer = k - 1;
let result = [];

while (result.length < n) {
  // pointer 인덱스의 값을 result에 push
  result.push(...people.splice(pointer, 1));
  // pointer 이동
  pointer += k - 1;
  if (pointer >= people.length) pointer %= people.length;
}

console.log(`<${result.join(", ")}>`);
