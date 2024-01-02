// 병합 정렬 Merge Sort : O(nlogn) -> 최고의 정렬
// element가 한개뿐인 배열로 쪼개는 함수
function mergeSort(arr) {
  // base case for recursion
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  // mid is included in right array
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  // 쪼갠 후에 각 배열들을 merge
  // recursively divide the problem -> O(logn)
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];

  // 둘 중 하나의 배열이 empty일 때까지 반복
  // loop -> O(n)
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      // 작은 값을 push하고 기존 배열에서 remove
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [8, 20, -2, 4, -6];
mergeSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]
