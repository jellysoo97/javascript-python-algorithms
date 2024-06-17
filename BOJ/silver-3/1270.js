// 전쟁 - 땅따먹기
// 출력: 각 땅의 상태 -> 지배되면 지배한 병사의 번호를, 아니면 SYJKGW를 출력
// 1. 군대 번호 배열을 loop 돌면서
// 2.   군대 번호 개수 객체에 카운팅한다.
// 3.   개수가 절반을 초과하면 해당 번호를 리턴한다.
// 4. 절반을 초과한 개수가 없으면 SYJKGW를 리턴한다.
// sol1 -> 메모리 초과
// const fs = require("fs");
// let [n, ...rest] = fs
//   .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
//   .toString()
//   .split("\n");
// const numbers = rest.map((number) => number.split(" ").map(Number));

// for (let i = 0; i < Number(n); i++) {
//   let count = {};
//   const [total, ...rest] = numbers[i];

//   for (const number of rest) {
//     count[number] ? (count[number] += 1) : (count[number] = 1);
//   }

//   const dominateNumber = Object.entries(count).find(
//     ([_, count]) => count > total / 2
//   );

//   console.log(dominateNumber ? dominateNumber[0] : "SYJKGW");
// }

// sol2 -> 메모리 초과
// const fs = require("fs");
// let [n, ...rest] = fs
//   .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
//   .toString()
//   .split("\n");
// const inputs = rest.map((number) => number.split(" "));

// for (let i = 0; i < n; i++) {
//   const [total, ...numbers] = inputs[i];
//   const numberCount = {};
//   let result = "SYJKGW";

//   for (const number of numbers) {
//     numberCount[number] ? numberCount[number]++ : (numberCount[number] = 1);

//     if (numberCount[number] > total / 2) {
//       result = number;
//       break;
//     }
//   }

//   console.log(result);
// }

// sol3
// sol1,2 메모리 초과
// 땅의 개수 <= 200, 병사수 <= 100,000, 번호가 -2^31 ~ 2^31 사이의 값, 최악의 경우 200 * 100,000개의 고유의 키-값 쌍이 나올 수 있음
// 입력 데이터 + numberCount 객체의 메모리 사용량이 꽤 커짐
// 보이어-무어 다수결 투표 알고리즘
// K명의 후보들이 N명에게 투표받을 때, 과반수 이상인 후보가 나오는지, 나온다면 어떤 후보인지 알아내는 알고리즘
// 시간 복잡도: O(n)
// 1. 과반수 원소가 될 수 있는 후보를 골라낸다.
//      count === 0이면 후보 교체
//      현재 후보가 나오면 count++
//      다른 후보가 나오면 count--
// 2. 그 후보가 받은 득표수가 과반수 이상인지 확인한다.
// 내부 로직과 별개로 입력 데이터 크기도 크고 값도 커서 한번에 다 받아와 배열에 넣으면 메모리 초과가 난다.
// 한줄씩 받아와서 처리해줘야 한다.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
let n;
let lineCount = 0;

rl.on("line", (line) => {
  if (!n) n = Number(line);
  else {
    let result = "SYJKGW";
    let count = 0;
    let majorNumber = 0;
    const inputs = line.split(" ").map(Number);
    const total = inputs[0];
    const numbers = inputs.slice(1);

    for (const number of numbers) {
      if (count === 0) {
        majorNumber = number;
        count = 1;
      } else if (number === majorNumber) {
        count++;
      } else {
        count--;
      }
    }

    let majorNumberCount = 0;
    for (const number of numbers) {
      if (number === majorNumber) majorNumberCount++;

      if (majorNumberCount > total / 2) {
        result = number;
        break;
      }
    }

    console.log(result);
  }

  lineCount++;
  if (lineCount > n) rl.close();
}).on("close", () => {});
