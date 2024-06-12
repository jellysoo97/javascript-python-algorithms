// 출력: n줄짜리 숫자 배열
// 1. 1 ~ n*n까지의 숫자를 담은 배열을 만든다.
// 2. 배열을 loop 돌면서
// 3. 	출력할 문자열에 하나씩 추가한다.
// 4. 	(인덱스 + 1)이 n의 배수이면 문자열을 출력한다.
// 5. 		출력할 문자열을 초기화한다.
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let n;

  for await (const line of rl) {
    if (!n) n = Number(line);
    else rl.close();
  }

  solution(n);
  process.exit();
})();

function solution(n) {
  let arr = new Array(n ** 2).fill(0).map((_, index) => index + 1);
  let line = "";

  for (let i = 0; i < arr.length; i++) {
    line += `${arr[i]},`;

    if ((i + 1) % n === 0) {
      console.log(line.slice(0, -1).split(",").join(" "));
      line = "";
    }
  }
}
