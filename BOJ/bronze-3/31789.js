// 모험의 시작
// 출력: 모험을 떠날 수 있으면 YES, 없으면 NO
// 무기는 하나만 구매 가능
// 1. N번 순회
// 2. 무기 가격 <= X이고 무기 공격력 > S인 무기가 나오면 return YES
// 3. 아니면 return NO
const fs = require("fs");
let [N, input1, ...input2] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const [X, S] = input1.split(" ").map(Number);
const weapons = input2.map((elem) => elem.split(" ").map(Number));
let result = "NO";

for (const [c, p] of weapons) {
  if (c <= X && p > S) {
    result = "YES";
    break;
  }
}

console.log(result);
