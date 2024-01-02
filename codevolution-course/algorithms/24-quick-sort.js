// 퀵 정렬 Quick Sort
// worst case : O(n^2)
function quickSort(arr) {
  // base case : 배열의 길이가 2보다 작으면 재귀 끝
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  // loop -> O(n)
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // recursion -> need base case
  // 케이스가 2개로 쪼개짐 -> O(logn)
  return [...quickSort[left], pivot, ...quickSort(right)];
}

const arr = [8, 20, -2, 4, -6];
quickSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]
