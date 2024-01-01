// sol1
// 효율성 테스트 : 테스트 1 〉	통과 (3.41ms, 36.8MB)
function solution(n) {
  let pointer = 1;
  let sum = 0;
  let cnt = 0;

  while (pointer <= Math.floor(n / 2)) {
    sum = 0;

    for (let i = pointer; i <= Math.ceil(n / 2); i++) {
      sum += i;

      if (sum > n) {
        break;
      }

      if (sum === n) {
        cnt++;
        break;
      }
    }

    pointer++;
  }

  return cnt + 1;
}

// sol2 : 테스트 1 〉	통과 (0.25ms, 33.3MB)
// 주어진 수의 홀수인 약수의 개수와 동일 -> 약수를 중간값으로 가지는 연속된 자연수 찾기
// 21 반례 있긴 함
function solution(n) {
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) {
      cnt++;
    }
  }

  return cnt;
}
