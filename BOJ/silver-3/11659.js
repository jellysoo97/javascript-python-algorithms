const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

// sol1: 메모리 초과
// const [first, second] = input;
// const [n, m] = first.split(" ");
// const arr = second.split(" ").map((str) => +str);

// input.slice(2).forEach((str) => {
//   const range = str.split(" ").map((str) => +str);
//   const [start, end] = range;
//   const slicedArr = arr.slice(start - 1, end);

//   console.log(slicedArr.reduce((prev, cur) => prev + cur, 0));
// });

// sol2
// (i ~ j까지의 합) = (0 ~ j까지의 합) - (0 ~ i-1까지의 합)
// 1. 미리 각 인덱스까지의 합 배열을 만든다
// 2. sum[end] - sum[start - 1]을 출력
const [_, second] = input;
const arr = second.split(" ").map((str) => +str);
const rangeArr = input
  .slice(2)
  .map((range) => range.split(" ").map((str) => +str));
let sum = new Array(arr.length + 1).fill(0);
let result = [];

arr.forEach((num, index) => {
  sum[index + 1] = sum[index] + num;
});

rangeArr.forEach((range) => {
  const [start, end] = range;

  result.push(sum[end] - sum[start - 1]);
});

console.log(result.join("\n"));
