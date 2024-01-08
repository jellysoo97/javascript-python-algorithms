// 계단오르기 climbing staircase
function solution(n) {
  let arr = [1, 2];

  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567;
  }

  return arr[n - 1];
}
