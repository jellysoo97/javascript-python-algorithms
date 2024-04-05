// mulitple pointer
function averagePair(arr, average) {
  // !arr.length이면 early return
  if (!arr.length) {
    return false;
  }

  // loop while start < end
  // end 오른쪽 끝에서 시작
  // arr[start]와 arr[end]의 평균이 average랑 같으면 return true
  // 크면 end--, 작으면 continue
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = (arr[i] + arr[end]) / 2;

    if (temp === average) {
      return true;
    }

    temp < average ? start++ : end--;
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
