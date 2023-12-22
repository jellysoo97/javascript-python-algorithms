// reverse()
// 배열 뒤집기
// 다만 원본 배열이 변형되기 때문에 주의
function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((n) => +n);
}
