function solution(a, b) {
  // a.length만큼 loop
  // 내적 += a[i] * b[i]
  return a.reduce((acc, cur, index) => acc + cur * b[index], 0);
}
