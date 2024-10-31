// 거북이
// L -> 오른쪽으로 3번 회전
// R -> 오른쪽으로 1번 회전
// F -> 앞으로 1칸
// B -> 뒤로 1칸
// 방향 설정 -> 방향에 따라 이동 -> 이동 시 경로에 추가
// 최소 영역 = 가로 * 세로 = (x좌표 최댓값 - 최솟값) * (y좌표 최댓값 - 최솟값)
const fs = require("fs");
let [T, ...testCases] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const coordinates = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

for (const testCase of testCases) {
  let current = [0, 0];
  let direction = 0;
  let moves = [[0, 0]];

  for (const order of testCase.split("")) {
    if (order === "L") direction = (direction + 3) % 4;
    else if (order === "R") direction = (direction + 1) % 4;
    else if (order === "F") {
      current.forEach(
        (coor, index) => (current[index] = coor + coordinates[direction][index])
      );
      moves.push([...current]);
    } else if (order === "B") {
      current.forEach(
        (coor, index) => (current[index] = coor - coordinates[direction][index])
      );
      moves.push([...current]);
    }
  }

  const x = moves.map(([x, _]) => x);
  const y = moves.map(([_, y]) => y);
  const width = Math.max(...x) - Math.min(...x);
  const height = Math.max(...y) - Math.min(...y);

  console.log(width * height);
}
