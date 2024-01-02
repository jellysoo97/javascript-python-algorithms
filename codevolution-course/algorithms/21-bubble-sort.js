// 버블 정렬 Bubble Sort : O(n^2) -> for loop & do-while loop
// isn't great for sorting
function bubbleSort(arr) {
  let isSwapped;

  do {
    isSwapped = false;
    // 마지막 인덱스를 보면 이전 인덱스와 비교
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
  } while (isSwapped);
}

const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]
