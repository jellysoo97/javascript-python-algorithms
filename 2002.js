// 추월
// 출력: 추월했을 것으로 여겨지는 차의 개수
// 1. 들어간 차량들의 인덱스를 저장한다.
// 2. 나오는 차량을 loop 돌면서
// 3.   현재 차량의 이전 차량들을 loop 돌면서 들어온 인덱스를 비교한다.
// 4.   체크된 적 없고 들어온 인덱스가 더 크면 +1
// 5.   체크 처리한다.
const fs = require("fs");
let [n, ...inputs] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");
n = Number(n);
let inIndex = {};
let visited = Array.from({ length: n }, () => false);
let count = 0;

for (let i = 0; i < n; i++) {
  inIndex[inputs[i]] = i;
}

inputs = inputs.slice(n);
for (let i = 0; i < n; i++) {
  const currentCar = inputs[i];

  for (const beforeCar of inputs.slice(0, i)) {
    if (
      !visited[inIndex[beforeCar]] &&
      inIndex[beforeCar] > inIndex[currentCar]
    ) {
      count++;
      visited[inIndex[beforeCar]] = true;
    }
  }
}

console.log(count);

// PU305A 1 <
// ZG232ZF 4 <
// ZG206A 3 <
// ZG508OK 0
// RI604B 2

// ZG5962J 4 <
// OS945CK 2 <
// ZG206A 0
// PU234Q 1
// ZG431SN 3
