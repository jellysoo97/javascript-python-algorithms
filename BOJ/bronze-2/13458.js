// 시험 감독
// 출력: 필요한 총감독관 + 부감독관 수의 최솟값
// 1. 응시자의 수만큼 loop 돌면서
// 2.   총감독만 필요하면 total + 1
// 3.   부감독도 필요하면 (필요한 부감독관 수 + 1)을 total에 더한다.
const fs = require("fs");
let [n, peopleArr, capability] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");
const [b, c] = capability.split(" ").map((str) => +str);
peopleArr = peopleArr.split(" ").map((str) => +str);
let total = 0;

for (const people of peopleArr) {
  if (people <= b) {
    total += 1;
    continue;
  }

  total += Math.ceil((people - b) / c) + 1;
}

console.log(total);
