// #2037
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

// p, w
const p = +input[0].split(" ")[0];
const w = +input[0].split(" ")[1];
// input 문자열 배열
const inputArr = input[1].split("");
// 알파벳 묶음
const alphabetArr = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
  ["J", "K", "L"],
  ["M", "N", "O"],
  ["P", "Q", "R", "S"],
  ["T", "U", "V"],
  ["W", "X", "Y", "Z"],
];
// 걸리는 시간
let time = 0;
// 문자열 위치
let position = { group: -1, index: -1 };

inputArr.forEach((char, index) => {
  // 공백
  if (char === " ") {
    time += p;
    return;
  }

  // char의 위치 구하기
  for (const arr of alphabetArr) {
    if (arr.includes(char)) {
      position.group = alphabetArr.indexOf(arr);
      position.index = arr.indexOf(char) + 1;
      break;
    }
  }

  console.log(char, position);

  // 이전 문자열과 같은 버튼인 경우
  if (alphabetArr[position.group].includes(inputArr[index - 1])) {
    time += w + p * position.index;
    return;
  }

  // 이전 문자열과 다른 버튼인 경우
  time += p * position.index;
});

console.log(time);
