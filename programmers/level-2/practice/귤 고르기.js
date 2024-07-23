// 귤 고르기
// 서로 다른 크기의 귤 가짓수 최솟값
// 크기-개수 딕셔너리
// 딕셔너리 배열화 -> 내림차순 정렬 -> k - 개수, result 카운트 반복 -> k <= 0이면 종료
function solution(k, tangerine) {
  let dict = {};
  let result = 0;

  // tangerine.forEach((elem) => {
  //   if (!dict[elem]) dict[elem] = 1;
  //   else dict[elem]++;
  // });
  tangerine.forEach((elem) => (dict[elem] = (dict[elem] || 0) + 1));

  for (const count of Object.values(dict).sort((a, b) => b - a)) {
    result++;
    k -= count;

    if (k <= 0) break;
  }

  return result;
}

solution(6, [1, 3, 2, 5, 4, 5, 2, 3]);
solution(4, [1, 3, 2, 5, 4, 5, 2, 3]);
solution(2, [1, 1, 1, 1, 2, 2, 2, 3]);
