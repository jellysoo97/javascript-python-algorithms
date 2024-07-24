// 연속 부분 수열 합의 개수
// 큐, sliding window
// 길이가 1~n인 연속 부분 수열로부터 나올 수 있는 합의 가짓수
// 길이 1~n 반복
// 연속 부분 수열의 시작점: 0~n-1, 끝점: (시작점+길이-1) % n -> 구간 합 구하기
function solution(elements) {
  let result = new Set();

  for (let i = 1; i <= elements.length; i++) {
    let sum = 0;

    for (let j = 0; j < elements.length; j++) {
      if (j < 1) {
        sum = elements.slice(j, i).reduce((prev, cur) => prev + cur, 0);
      } else {
        sum = sum - elements[j - 1] + elements[(j + i - 1) % elements.length];
      }
      result.add(sum);
    }
  }

  return result.size;
}

solution([7, 9, 1, 1, 4]);
