// sol1
// 1. 가능한 모든 경우 구하기 -> 순열
//    하나 선택 후 나머지 재귀
// 2. loop 돌면서 탐험 가능한 던전 개수 구하기 -> 던전 개수와 동일하면 break
function solution(k, dungeons) {
  function getPermutations(arr) {
    if (arr.length === 1) return [arr];

    const permutations = [];
    arr.forEach((item, index) => {
      const rest = arr.slice(0, index).concat(arr.slice(index + 1));
      const restPermutations = getPermutations(rest);
      restPermutations.forEach((permutation) => {
        permutations.push([item].concat(permutation));
      });
    });

    return permutations;
  }

  let result = [];
  const cases = getPermutations(dungeons);

  cases.forEach((elem) => {
    let left = k;
    let count = 0;

    for (const [min, use] of elem) {
      if (left < min) break;
      else {
        left -= use;
        count++;
      }
    }

    result.push(count);
  });

  return Math.max(...result);
}

// sol2
// 완전탐색, DFS
function solution(k, dungeons) {
  // 방문한 던전 확인용 배열
  let visited = new Array(dungeons.length).fill(false);
  let result = 0;

  // arg: 남은 피로도, step
  function dfs(hp, step) {
    // loop for dungeons
    for (let i = 0; i < dungeons.length; i++) {
      // 방문하지 않았고 방문하려는 던전 필요 피로도 <= 남은 피로도이면 visited = true
      // 더 깊게 내려가기
      if (!visited[i] && dungeons[i][0] <= hp) {
        visited[i] = true;
        dfs(hp - dungeons[i][1], step + 1);
        visited[i] = false;
      }
    }

    result = Math.max(result, step);
  }

  dfs(k, 0);

  return result;
}

solution(80, [
  [80, 20],
  [50, 40],
  [30, 10],
]);
