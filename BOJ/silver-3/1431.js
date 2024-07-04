// 시리얼 번호
// 출력: 시리얼 번호 정렬 결과
// 시리얼 번호 정렬 조건
// 1. 길이가 다르면 짧은게 먼저
// 2. 길이가 같으면 자리수 합이 작은게 먼저(숫자인 것만 더함)
// 3. 길이가 같고 자리수 합도 같으면 사전순으로(숫자가 먼저)
const fs = require("fs");
let [N, ...serialNumbers] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function sortBySum(a, b) {
  const numberRegex = /[0-9]/g;
  function getSum(numbers) {
    if (!numbers) return 0;
    return numbers.map(Number).reduce((prev, cur) => prev + cur, 0);
  }

  return getSum(a.match(numberRegex)) - getSum(b.match(numberRegex));
}

function sortByDict(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) continue;
    return a[i].charCodeAt(0) - b[i].charCodeAt(0);
  }
}

serialNumbers.sort((a, b) => a.length - b.length || sortBySum(a, b) || sortByDict(a, b));
serialNumbers.forEach((num) => console.log(num));
