// 최솟값 만들기
// 출력: 선택한 두 요소를 곱의 누적합 최솟값
// 곱의 누적합 최소 = 곱의 최소 = 최소 * 최대
// A 오름차순 정렬, B 내림차순 정렬
// reduce -> A[i] * B[i] 누적합
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((prev, cur, i) => prev + cur * B[i], 0);
}

console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));
