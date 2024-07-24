// n^2 배열 자르기
// k행, k열 -> 값이 k
// 1차원 배열 인덱스 i: 행 > 열이면 행, 아니면 열
function solution(n, left, right) {
  let arr = [];

  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n) + 1;
    const col = (i % n) + 1;

    // arr.push(Math.max(row, col))
    arr.push(row > col ? row : col);
  }

  return arr;
}

solution(3, 2, 5);
solution(4, 7, 14);
