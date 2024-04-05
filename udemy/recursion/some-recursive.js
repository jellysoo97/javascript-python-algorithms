function someRecursive(arr, callback) {
  if (!arr.length) return false;

  return callback(arr[0]) ? true : someRecursive(arr.slice(1), callback);
}

console.log(someRecursive([4, 6, 8], (val) => val > 10));
