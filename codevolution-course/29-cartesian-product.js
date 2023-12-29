// 카테시안 곱 = 데카르트 곱 cartesian product : O(mn)
// nested for loop이지만 length of first array and length of second array can be different
// 같으면 O(n^2)일거지만 보장된 게 아니니까 O(mn)
function cartesianProduct(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }

  return result;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
// [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]
console.log(cartesianProduct(arr1, arr2));
