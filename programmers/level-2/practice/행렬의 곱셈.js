// 행렬의 곱셈
// i행 j열 * j행 * i열의 합
function solution(arr1, arr2) {
  const rowLength = arr1.length;
  const colLength = arr2[0].length;
  let result = [];

  for (let i = 0; i < rowLength; i++) {
    let row = [];

    for (let j = 0; j < colLength; j++) {
      row.push(
        arr1[i].reduce((prev, cur, index) => prev + cur * arr2[index][j], 0)
      );
    }

    result.push(row);
  }

  return result;
}

solution(
  [
    [2, 3, 2],
    [4, 2, 4],
    [3, 1, 4],
  ],
  [
    [5, 4, 3],
    [2, 4, 1],
    [3, 1, 1],
  ]
);
