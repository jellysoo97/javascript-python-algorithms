// 출력: 주어진 항공권을 모두 사용하여 짠 여행경로
// 1. 출발지, 남은 티켓, 경로를 받는 dfs
// 2.   재귀 base case: 남은 티켓이 없으면 경로 push
// 3.   남은 티켓을 loop 돌면서
// 5.     출발지가 같은 경로만 선정한다.
// 6.     다음 dfs(출발지 = 해당 경로의 도착지, 남은 티켓 = 해당 경로를 뺀 나머지, 업데이트된 경로)
function solution(tickets) {
  let result = [];

  function dfs(start, remained, path) {
    const nextPath = [...path, start];

    if (remained.length === 0) {
      result.push(nextPath);
    } else {
      remained.map(([nextStart, nextEnd], index) => {
        if (nextStart !== start) return;

        const nextRemained = [...remained];
        nextRemained.splice(index, 1);
        dfs(nextEnd, nextRemained, nextPath);
      });
    }
  }

  dfs("ICN", tickets, []);
  result = result.sort();

  return result[0];
}

const result = solution([
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
]);

console.log(result);
