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
