function solution(left, right) {
  // 약수의 개수가 짝수 = 제곱수가 아닌 수, 약수의 개수가 홀수 = 제곱수인 수
  let arr = [];

  for (let i = left; i <= right; i++) {
    arr.push(i);
  }

  return arr.reduce(
    (acc, cur) => (Number.isInteger(Math.sqrt(cur)) ? acc - cur : acc + cur),
    0
  );
}
