// 요세푸스 문제
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();

// sol1: pointer 이동시키기
// const [n, k] = input.split(" ").map((str) => +str);
// let people = new Array(n).fill(0).map((_, index) => index + 1);
// let pointer = k - 1;
// let result = [];

// while (result.length < n) {
//   // pointer 인덱스의 값을 result에 push
//   result.push(...people.splice(pointer, 1));
//   // pointer 이동
//   pointer += k - 1;
//   if (pointer >= people.length) pointer %= people.length;
// }

// console.log(`<${result.join(", ")}>`);

// sol2: 큐
// 첫번째 인덱스 값 빼내고
// pointer가 k번째 수에 있으면 result에 push
// 아니면 다시 queue에 push
const [n, k] = input.split(" ").map((str) => +str);
let queue = new Array(n).fill(0).map((_, index) => index + 1);
let result = [];
let pointer = 0;

while (result.length < n) {
  let head = queue.shift();

  pointer++;
  pointer % k === 0 ? result.push(head) : queue.push(head);
}

console.log(`<${result.join(", ")}>`);
