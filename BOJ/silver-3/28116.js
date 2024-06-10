// 선택 정렬의 이동 거리
// 입력 배열 요소가 각각 얼마나 이동했는가
// sol1) 시간 초과 날 것 같음 -> 시간 초과 -> 이중 for문을 대체해야
// 1. 정렬하지 않은 구간의 최솟값 인덱스를 찾는다 -> 이중 for문
// 2. arr[pointer] <-> 최솟값
// 3. 위치 바뀐 숫자들 거리값 더하기
// const fs = require("fs");
// let [n, arr] = fs
//   .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
//   .toString()
//   .split("\n");
// n = parseInt(n);
// arr = arr.split(" ").map((elem) => +elem);

// let pointer = 0;
// let move = new Array(n).fill(0);

// while (pointer < n - 1) {
//   let min = arr[pointer];
//   let minIndex = pointer;

//   for (let i = pointer + 1; i < n; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//       minIndex = i;
//     }
//   }

//   if (pointer === minIndex) {
//     pointer++;
//     continue;
//   }

//   [arr[pointer], arr[minIndex]] = [arr[minIndex], arr[pointer]];
//   move[arr[pointer] - 1] += minIndex - pointer;
//   move[arr[minIndex] - 1] += minIndex - pointer;
//   pointer++;
// }

// console.log(move.join(" "));

// sol2
// 선택 정렬 시 배열 요소의 이동거리 구하기
// 1. 처음 위치를 저장한다 -> {[요소]: 위치}
// 2. 입력받은 배열을 정렬해버린다 -> 최솟값을 가지고 자리를 바꿔준 요소를 찾는다 (거꾸로 가기)
// 3. 처음 위치가 i인 수와 위치 교환
// 4. (location[min] - i)만큼 이동거리 더하기
const fs = require("fs");
let [n, arr] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");
n = parseInt(n);
arr = arr.split(" ").map((elem) => +elem);

let location = {};
let move = new Array(n).fill(0);

arr.forEach((elem, index) => {
  location[elem] = index;
});

const sortedArr = [...arr].sort((a, b) => a - b);

sortedArr.forEach((min, index) => {
  const prevLoc = location[min];

  if (index !== prevLoc) {
    // 위치 교환
    location[arr[index]] = prevLoc;
    location[arr[prevLoc]] = index;
    [arr[index], arr[prevLoc]] = [arr[prevLoc], arr[index]];

    // 거리 계산
    move[min - 1] += Math.abs(prevLoc - index);
    move[arr[prevLoc] - 1] += Math.abs(prevLoc - index);
  }
});

console.log(move.join(" "));
