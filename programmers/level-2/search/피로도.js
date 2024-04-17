// 완전탐색, DFS
function solution(k, dungeons) {
  // 방문한 던전 확인용 배열
  let visited = new Array(dungeons.length).fill(false);
  let result = 0;

  // arg: 남은 피로도, step
  function DFS(hp, step) {
    // loop for dungeons
    for (let i = 0; i < dungeons.length; i++) {
      // 방문하지 않았고 방문하려는 던전 필요 피로도 <= 남은 피로도이면 visited = true
      // 더 깊게 내려가기
      if (!visited[i] && dungeons[i][0] <= hp) {
        visited[i] = true;
        DFS(hp - dungeons[i][1], step + 1);
        visited[i] = false;
      }
    }

    result = Math.max(result, step);
  }

  DFS(k, 0);

  return result;
}
