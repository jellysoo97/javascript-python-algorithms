// sol1
// 문자열 내에 특정 문자열 개수 찾을 땐 .match(regex).length
// 주의할 점은 특정 문자열이 없을 경우 null을 반환하니 에러 핸들링 필요 -> null.length는 타입 에러
// "test".match(/o/g)?.length -> undefined
// (("test".match(/o/g)) || []).length -> 0
function solution(n) {
  let cnt = 0;
  const cntOfN = n.toString(2).match(/1/g).length;

  while (cnt !== cntOfN) {
    n++;
    cnt = n.toString(2).match(/1/g).length;
  }

  return n;
}

// sol2
// 재귀
function solution(n, k = n + 1) {
  return n.toString(2).match(/1/g).length === k.toString(2).match(/1/g).length
    ? k
    : solution(n, k + 1);
}

// sol3
// 다시 풀기
function solution(n, next = n + 1) {
  // base case, 재귀 멈출 조건
  // n < next 이고 이진법 n, next의 1의 개수가 같아야 함
  if (
    n < next &&
    n.toString(2).match(/1/g).length === next.toString(2).match(/1/g).length
  ) {
    return next;
  }

  // different input
  return solution(n, next + 1);
}
