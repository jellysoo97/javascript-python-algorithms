function solution(n) {
  // 길이가 n인 배열 생성
  // mapping: index 짝수면 "수", 홀수면 "박"
  // join array
  return new Array(n)
    .fill("")
    .map((_, index) => (index % 2 === 0 ? "수" : "박"))
    .join("");
}
