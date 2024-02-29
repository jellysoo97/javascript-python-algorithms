function solution(n, s) {
  // 최고의 집합을 만들 수 없는 경우 = n > s early return
  if (n > s) {
    return [-1];
  }

  // n = 1이면 [s]
  if (n === 1) {
    return [s];
  }

  // 각 원소의 곱이 최대다 = 값이 고르게 분포되어 있다
  let result = [];

  while (n > 0) {
    const elem = Math.floor(s / n);

    result.push(elem);
    s -= elem;
    n--;
  }

  return result.sort((a, b) => a - b);
}
