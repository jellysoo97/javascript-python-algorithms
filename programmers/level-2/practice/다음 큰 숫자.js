// 다음 큰 숫자
// 출력: 입력값 n의 다음 큰 수
// n부터 1씩 더해서 다음 큰 수인지 확인
// 조건을 만족하면 리턴, 아니면 반복
// sol1
function solution(n) {
  let next = n;
  let isNextBigNumber = false;

  while (!isNextBigNumber) {
    next++;
    isNextBigNumber =
      next > n &&
      next.toString(2).match(/1/g)?.length ===
        n.toString(2).match(/1/g)?.length;
  }

  return next;
}

// sol2: 재귀
function solution(n, next = n + 1) {
  // base case
  if (
    n < next &&
    n.toString(2).match(/1/g)?.length === next.toString(2).match(/1/g)?.length
  ) {
    return next;
  }

  // different input
  return solution(n, next + 1);
}

solution(78);
solution(15);
