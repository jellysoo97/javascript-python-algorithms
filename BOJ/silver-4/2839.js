// 설탕 배달
// n 킬로그램 배달, 최대한 적은 봉지 개수 출력, 정확하게 n 킬로그램 못 만들면 -1 출력
// 봉지 종류: 3 or 5 고정
// 1. n의 최선의 봉지 개수 = (n - 3 or n - 5)의 최선의 봉지 개수 + 1
// 2. 각 인덱스 무게에서의 최선의 봉지 개수 배열 만들기 (index 3, 4, 5, 6, 7은 base case)
// 3. 8 <= n 이면 8 ~ n loop 돌면서
// 4. arr[i-5], arr[i-3] 값 비교 -> 둘다 -1보다 크면 둘 중 최솟값, 둘 중 하나라도 -1이면 반대값이 들어간다

// 3 -> 1
// 4 -> -1
// 5 -> 1
// 6 -> 2
// 7 -> -1
// 8 -> arr[3] + 1 or arr[5] + 1
// 9 -> arr[4] + 1 or arr[6] + 1 -> arr[6] + 1
// 10 -> arr[5] + 1 or arr[7] + 1 -> arr[5] + 1
const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString();
const n = parseInt(input);
let minCountArr = [0, 0, 0, 1, -1, 1, 2, -1];

if (n < 8) {
  return console.log(minCountArr[n]);
}

for (let i = 8; i <= n; i++) {
  let minusFive = minCountArr[i - 5];
  let minusThree = minCountArr[i - 3];
  let minCount =
    minusFive > -1 && minusThree > -1
      ? Math.min(minusFive, minusThree)
      : minusFive === -1
      ? minusThree
      : minusFive;

  minCountArr[i] = minCount + 1;
}

console.log(minCountArr[n]);
