// 8진수 2진수
// 출력: 8진수 -> 2진수 변환값
// 8진수 -> 10진수 -> 2진수로 변환해야 한다.
// parseInt()로 변환하면 불필요한 0이 제거된 상태에서 2진수로 변환될 수 있다.
// 8진수 각 자릿수를 개별로 2진수로 변환하고 이어붙여야 한다.
// 2진수 변환 시 3자리가 보장되어야 한다. 빈 자리는 0으로 채운다.
// 1. input을 loop 돌면서
// 2.   8진수 -> 10진수 -> 2진수로 변환한다.
// 3.   첫 자릿수는 그대로 붙인다. (반드시 1로 시작해야 하므로)
// 4.   나머지는 세 자리를 채워서 이어붙인다.
const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();
let result = "";

for (let i = 0; i < input.length; i++) {
  const binary = parseInt(input[i], 8).toString(2);

  i === 0 ? (result += binary) : (result += binary.padStart(3, "0"));
}

console.log(result);
