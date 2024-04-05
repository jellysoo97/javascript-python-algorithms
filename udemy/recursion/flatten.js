function flatten(arr) {
  let result = [];

  function inner(arr) {
    if (!arr.length) return;

    // Array.isArray() -> Array.isArray(arr[0]) ? result.push(arr[0]) : inner(arr[0])
    typeof arr[0] !== "object" ? result.push(arr[0]) : inner(arr[0]);

    return inner(arr.slice(1));
  }

  inner(arr);

  return result;
}

console.log(flatten([[1], [2], [3]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
