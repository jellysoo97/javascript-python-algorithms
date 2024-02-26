function solution(arr1, arr2) {
  const row = arr1.length;
  const col = arr2[0].length;
  let arr = [];
  let result = [];

  // 1. row번 반복
  for (let i = 0; i < row; i++) {
    arr = [];
    // 2. col번 반복
    for (let j = 0; j < col; j++) {
      // 3. sum 구하기
      arr.push(
        arr1[i].reduce((acc, cur, index) => acc + cur * arr2[index][j], 0)
      );
    }

    result.push(arr);
  }

  return result;
}
