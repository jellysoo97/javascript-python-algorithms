// n.toString() or n + ''
function solution(n) {
  return n
    .toString()
    .split("")
    .map((n) => +n)
    .reduce((a, b) => a + b);
}
