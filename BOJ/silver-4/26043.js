// 식당 메뉴
// sol1 -> 시간 초과
// 원하는 메뉴를 먹은 학생 번호 배열, 원하는 메뉴를 먹지 못한 학생 번호 배열, 못 먹은 학생 번호 배열 -> 오름차순 정렬
// 1. n만큼 loop 돌면서 tasks[i]를 처리
// 2. 1이면 큐에 추가, 2이면 큐에서 제거
// 3. 큐에서 제거 -> 원하는 메뉴 & 나온 메뉴 비교 -> A,B에 맞게 추가
// 4. loop 나왔는데 queue 남아있으면 C에 추가
const fs = require("fs");
const [n, ...rest] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");
const tasks = rest.map((task) => task.split(" ").map((str) => parseInt(str)));
let queue = [];
let arrA = [];
let arrB = [];

for (const task of tasks) {
  const [type, ...rest] = task;

  if (type === 1) {
    queue.push(rest);
    continue;
  }

  if (type === 2 && queue.length > 0) {
    const [num, menu] = queue.shift();

    menu === task[1] ? arrA.push(num) : arrB.push(num);
  }
}

const arrC = queue.map((item) => item[0]).sort((a, b) => a - b);

arrA.sort((a, b) => a - b);
arrB.sort((a, b) => a - b);

console.log(arrA.join(" ") || "None");
console.log(arrB.join(" ") || "None");
console.log(arrC.join(" ") || "None");
