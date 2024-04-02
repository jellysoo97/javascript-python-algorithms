// input: sorted array of numbers
// count unique values of array
// O(n)
function countUniqueValues(arr) {
  if (!arr.length) {
    return 0;
  }

  // loop over arr, index = 1부터 시작
  // arr[pointer] === arr[i] ? continue : pointer++, arr[pointer] = arr[i]
  let pointer = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[pointer] !== arr[i]) {
      pointer++;
      arr[pointer] = arr[i];
    }
  }

  // return pointer + 1
  return pointer + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
console.log(countUniqueValues([])); // 0
