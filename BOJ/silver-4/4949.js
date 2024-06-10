// 균형잡힌 세상
// () [] 괄호의 짝이 맞아야 함, "."이 오면 문자열 끝, 짝이 맞는 문자열인지 판단
// 1. 문자열 loop 돌면서
// 2.   "(", "["이면 스택에 추가
// 3.   ")", "]"이면
// 4.     스택 길이 === 0이면 "no", 아니면 스택 pop해서 비교
// 5. 다 돌았는데 스택에 괄호 남아있으면 "no" 아니면 "yes"
const fs = require("fs");
let arr = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");
const pair = {
  "[": "]",
  "(": ")",
};

for (const str of arr) {
  let stack = [];

  if (str === ".") {
    break;
  }

  for (const item of str) {
    if (item === "(" || item === "[") {
      stack.push(item);
      continue;
    }

    if (item === ")" || item === "]") {
      if (stack.length === 0) {
        console.log("no");
        break;
      }

      if (item !== pair[stack.pop()]) {
        console.log("no");
        break;
      }
    }

    if (item === ".") {
      console.log(stack.length === 0 ? "yes" : "no");
    }
  }
}
