function solution(x, n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = x * (i + 1);
  }

  return arr;
}
