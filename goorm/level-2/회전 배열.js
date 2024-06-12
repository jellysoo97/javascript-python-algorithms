// 출력: m회 회전한 수열의 첫번째 인덱스 값
// a1칸 왼쪽으로 이동한 수열의 첫번째 값 = 첫번째 값에서 오른쪽으로 a1만큼 이동한 값
// 1. 포인터 = 수열의 첫번째 인덱스, 거리 = 첫번째 인덱스의 값, 포인터가 이동해야 할 거리
// 1. m만큼 loop 돌면서
// 2. 	포인터를 거리만큼 이동시킨다. 배열의 길이를 넘어설 수 있으므로 (포인터 + 거리) % 배열의 길이 처리해준다.
// 3. 	거리를 업데이트한다.
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let n, m;
  let queue = [];

  for await (const line of rl) {
    if (!n && !m) [n, m] = line.split(" ").map(Number);
    else queue.push(...line.split(" ").map(Number));

    if (queue.length === n) {
      const result = solution(m, queue);

      console.log(result);
      rl.close();
    }
  }

  process.exit();
})();

function solution(m, queue) {
  let pointer = 0;
  let distance = queue[pointer];

  for (let i = 0; i < m; i++) {
    pointer = (pointer + distance) % queue.length;
    distance = queue[pointer];
  }

  return queue[pointer];
}
