// 최댓값과 최솟값
// 출력: 최댓값과 최솟값
// 문자열을 숫자 배열로 변환
// 배열 중 최솟값, 최댓값 리턴
function solution(s) {
  const arr = s.split(" ").map(Number);

  return `${Math.min(...arr)} ${Math.max(...arr)}`;
}
