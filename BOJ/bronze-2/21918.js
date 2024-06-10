// 전구
// 출력: 모든 명령어를 수행한 후의 전구 상태
// 1. 명령어 loop을 돌면서
// 2.   명령어 번호에 따라 명령어를 수행한다.
const fs = require("fs");
let [_, light, ...rest] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");
let lightArr = light.split(" ").map(Number);

for (const command of rest) {
  const [number, num1, num2] = command.split(" ").map(Number);

  if (number === 1) {
    lightArr[num1 - 1] = num2;
  }

  if (number === 2) {
    for (let i = num1 - 1; i < num2; i++) {
      lightArr[i] = 1 - lightArr[i];
    }
  }

  if (number === 3) {
    for (let i = num1 - 1; i < num2; i++) {
      lightArr[i] = 0;
    }
  }

  if (number === 4) {
    for (let i = num1 - 1; i < num2; i++) {
      lightArr[i] = 1;
    }
  }
}

console.log(lightArr.join(" "));
