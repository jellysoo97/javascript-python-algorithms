// 사탕 게임
// 색이 다른 인접 두 칸 선택 -> 교환 -> 모두 같은 색인 연속 부분의 최대 길이
// 브루트포스
// 교환 가능한지 -> 오른쪽, 아래만 검사
// 선택 -> 교환 -> 최대 개수 -> 교환 되돌리기 반복
const fs = require("fs");
let [N, ...inputs] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
let candies = inputs.map((elem) => elem.split(""));
N = Number(N);
const moves = [
  [1, 0],
  [0, 1],
];
let maxCandyCount = 0;

function swap(y1, x1, y2, x2) {
  [candies[y1][x1], candies[y2][x2]] = [candies[y2][x2], candies[y1][x1]];
}

function getMaxCandyCount() {
  let maxCount = 0;

  // 행의 같은 색상 연속 최대 개수
  for (let row = 0; row < N; row++) {
    let count = 1;
    for (let col = 1; col < N; col++) {
      if (candies[row][col] === candies[row][col - 1]) count++;
      else count = 1;
      if (count > maxCount) maxCount = count;
    }
  }

  // 열의 같은 색상 연속 최대 개수
  for (let col = 0; col < N; col++) {
    let count = 1;
    for (let row = 1; row < N; row++) {
      if (candies[row][col] === candies[row - 1][col]) count++;
      else count = 1;
      if (count > maxCount) maxCount = count;
    }
  }

  return maxCount;
}

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    // 오른쪽, 아래 케이스 고려
    for (const [dx, dy] of moves) {
      const nx = x + dx;
      const ny = y + dy;
      if (0 <= nx && nx < N && 0 <= ny && ny < N) {
        // 오른쪽 or 아래 교환
        swap(y, x, ny, nx);
        // 최대 개수
        maxCandyCount = Math.max(maxCandyCount, getMaxCandyCount());
        // 교환 되돌리기
        swap(ny, nx, y, x);
      }
    }
  }
}

console.log(maxCandyCount);
