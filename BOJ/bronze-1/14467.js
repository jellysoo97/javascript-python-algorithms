// 소가 길을 건너간 이유 1
// 출력: 소가 위치를 바꾼 횟수
// 1. 소 번호와 위치를 담는 객체를 만든다.
// 2. 입력을 loop 돌면서
// 3.   해당 번호의 이전 위치가 현재 위치와 다르면 카운팅한다.
// 4.   현재 위치를 담는다.
const fs = require("fs");
let [n, ...rest] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");
let cow = {};
let count = 0;

for (const item of rest) {
  const [number, location] = item.split(" ");

  if (cow[number]) {
    cow[number] !== location && count++;
  }

  cow[number] = location;
}

console.log(count);
