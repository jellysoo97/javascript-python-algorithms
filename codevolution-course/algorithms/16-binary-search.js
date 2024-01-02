// 이진 탐색 binary search : O(logn)
// 조건 : 정렬된 배열 인풋
// left, right pointer로 접근
// 중간값과 비교 후 left, right pointer 인덱스 이동시키면서 반씩 줄이기
function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
      return middleIndex;
    }

    // 매 iteration마다 reduce input size by half
    if (target < middleIndex) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1
