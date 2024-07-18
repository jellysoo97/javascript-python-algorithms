// 행운을 빌어요
// 출력: 줄기와 잎을 모두 쓰기 위해 더 가져와야 할 줄기와 잎의 개수 합의 최솟값
const fs = require("fs");
let [T, ...testCases] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
testCases = testCases.map((elem) => elem.split(" ").map(Number));

// sol1 - 실패
// for (let [stems, leaves] of testCases) {
//   let result = 0;

//   function createClover() {
//     let leafType =
//       leaves % 3 === 0 || (leaves % 4 !== 0 && leaves % 3 >= leaves % 4)
//         ? 3
//         : 4;

//     stems -= Math.min(stems, Math.floor(leaves / leafType));
//     leaves %= leafType;
//   }

//   while (stems > 0 || leaves > 0) {
//     if (stems > 0 && leaves >= 3) createClover();
//     else {
//       if (stems > 0) {
//         result += 3 - leaves;
//         leaves += 3 - leaves;
//       } else {
//         result++;
//         stems++;
//       }
//     }
//   }

//   console.log(result);
// }

// sol2
// 필요한 잎의 개수 -> 최소: 줄기 * 3, 최대: 줄기 * 4
// 최소 잎의 개수보다 적으면 적은 만큼 추가
// 최대 잎의 개수보다 많으면 줄기 하나 추가해서 재귀
for (const [stems, leaves] of testCases) {
  function createClover(stem, leaf, result) {
    if (leaf < stem * 3) {
      result += stem * 3 - leaf;
      return result;
    } else if (leaf > stem * 4) {
      result++;
      result = createClover(stem + 1, leaf, result);
    }
    return result;
  }

  console.log(createClover(stems, leaves, 0));
}
