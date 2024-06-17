// 점프왕 쩰리
// 출력: 값이 -1인 점에 도달할 수 있으면 HaruHaru, 없으면 Hing
// 오른쪽과 아래로만 이동 가능
// 1. 맵을 2차원 배열로 가공
// 2. [0,0]부터 dfs, stack이 빌 때까지 반복
// 3.   stack.pop() 위치의 값이 -1이면 HaruHaru 리턴
// 4.   방문한 적 없고 값만큼 오른쪽 또는 아래로 이동가능하면 stack에 추가, visitied 처리
// 5. 중간 리턴없이 반복문 나오면 Hing 리턴
const fs = require("fs");
let [n, ...rest] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");
const graph = rest.map((nodes) => nodes.split(" ").map(Number));
let visited = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => false)
);
let stack = [[0, 0]];

function dfs() {
  while (stack.length) {
    const [y, x] = stack.pop();
    const value = graph[y][x];

    if (value === -1) return "HaruHaru";

    if (y + value < n && !visited[y + value][x]) {
      visited[y + value][x] = true;
      stack.push([y + value, x]);
    }

    if (x + value < n && !visited[y][x + value]) {
      visited[y][x + value] = true;
      stack.push([y, x + value]);
    }
  }

  return "Hing";
}

const result = dfs();

console.log(result);
