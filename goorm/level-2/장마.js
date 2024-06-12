// 출력: 1 ~ N번 집까지의 땅 높이
// 1. rains loop 돌면서
// 2. 	start ~ end번 집의 물의 높이를 1씩 증가시킨다.
// 3. 	비가 내린 집 집합에 집을 추가한다.
// 4. 	i+1이 3의 배수이면
// 5. 		비가 내린 집 집합에 담긴 집들의 물의 높이를 1씩 감소시킨다.
// 6. 		비가 내린 집 집합을 초기화 한다.
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let n, m;
  let heights;
  let rains = [];

  for await (const line of rl) {
    if (!n && !m) [n, m] = line.split(" ").map(Number);
    else if (!heights) heights = line.split(" ").map(Number);
    else rains.push(line.split(" ").map(Number));

    if (rains.length === m) rl.close();
  }

  const result = solution(m, heights, rains);
  console.log(result.join(" "));
  process.exit();
})();

function solution(m, heights, rains) {
  let rainedHouses = new Set();

  rains.forEach((rain, index) => {
    const [start, end] = rain;

    for (let i = start - 1; i < end; i++) {
      heights[i]++;
      rainedHouses.add(i);
    }

    if ((index + 1) % 3 === 0) {
      rainedHouses.forEach((houseIndex) => heights[houseIndex]--);
      rainedHouses.clear();
    }
  });

  return heights;
}
