// sol1 : 테스트 4 〉	통과 (23.24ms, 36.7MB)
function solution(a, b) {
  if (a === b) {
    return a;
  }

  const min = a - b > 0 ? b : a;
  const max = a - b > 0 ? a : b;
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

// sol2 테스트 4 〉	통과 (22.92ms, 36.9MB)
function solution(a, b) {
  let sum = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }

  return sum;
}

// sol3 테스트 4 〉	통과 (0.03ms, 33.4MB)
// 가우스 등차수열의 합
function solution(a, b) {
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}
