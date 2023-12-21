// 선형 탐색 Linear Search : O(n)
function linearSearch(arr, t) {
  return arr.indexOf(t);
}

function linearSearch2(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10)); //2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); // 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)); // -1
console.log(linearSearch2([-5, 2, 10, 4, 6], 10)); // 2
console.log(linearSearch2([-5, 2, 10, 4, 6], 6)); // 4
console.log(linearSearch2([-5, 2, 10, 4, 6], 20)); // -1
