// !!초콜릿 중독 주의!!
// (! * a개) + n + (! * b개)
// 뒷부분 팩토리얼 먼저 계산, 있으면 항상 1 없으면 n
// 앞부분 논리 반전 계산, 개수가 짝수면 그대로, 홀수면 반전
const fs = require("fs");
let [T, ...testCases] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

testCases.forEach((testCase) => {
  const n = testCase.match(/[0|1]/)[0];
  const [front, back] = testCase.split(n);
  let result = 0;

  result = !!back ? 1 : Number(n);
  result = front.length % 2 === 0 ? result : result === 0 ? 1 : 0;
  console.log(result);
});
