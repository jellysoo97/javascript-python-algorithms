// 배열 복원하기
// 출력: 배열 A
// 1. 0으로 채워진 h x w 크기의 배열a를 만든다.
// 2. 배열a 이중 loop 돌면서
// 3.   i < x || j < y 이면(겹치는 부분) arrA[i][j] = arrB[i][j]
// 4.   아니면 (i -> x ~ h, j -> y ~ w) arrA[i][j] = arrB[i][j] - arrA[i-x][j-y]
// 1 2 3 4 -> 0 0 0 0 0 -> 1 2 3 4 0
// 5 6 7 8 -> 0 1 2 3 4 -> 5 7 9 11 4
//            0 5 6 7 8 -> 0 5 6 7 8
const fs = require("fs");
let [input, ...rest] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");
const [h, w, x, y] = input.split(" ").map((str) => +str);
let arrA = Array.from({ length: h }, () => Array(w).fill(0));
const arrB = rest.map((item) => item.split(" ").map((str) => +str));

for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    i < x || j < y
      ? (arrA[i][j] = arrB[i][j])
      : (arrA[i][j] = arrB[i][j] - arrA[i - x][j - y]);
  }
}

arrA.forEach((row) => console.log(row.join(" ")));
