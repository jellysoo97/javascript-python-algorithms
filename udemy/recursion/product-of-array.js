function productOfArray(arr) {
  // base case
  if (arr.length === 0) return 1;

  // different input
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 10]));
