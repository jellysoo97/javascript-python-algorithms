// 트럭
// 출력: 모든 트럭이 다리를 건너는 최단시간
// 1. 다리 배열을 만든다.
// 2. 다리가 빌 때까지 반복한다.
// 3.   타임 + 1
// 4.   다리를 시간마다 앞으로 하나씩 땡긴다. 남은 무게 += 빠져나간 트럭 무게
// 5.   올라가야 할 트럭 리스트가 있으면
// 6.     첫 인덱스 트럭이 올라갈 수 있으면 다리에 트럭을 추가하고 무게를 업데이트한다.
// 7.     올라갈 수 없으면 다리에 0을 추가한다. (마지막 트럭이 끝까지 땡겨질 때까지 기다린다)
const fs = require("fs");
let [input1, input2] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");
const [n, w, l] = input1.split(" ").map((str) => +str);
let truckArr = input2.split(" ").map((str) => +str);
let bridge = Array(w).fill(0);
let leftWeight = l;
let time = 0;

while (bridge.length > 0) {
  time++;
  leftWeight += bridge.shift();

  if (truckArr.length > 0) {
    if (truckArr[0] <= leftWeight) {
      const currentTruck = truckArr.shift();

      bridge.push(currentTruck);
      leftWeight -= currentTruck;
    } else {
      bridge.push(0);
    }
  }
}

console.log(time);
