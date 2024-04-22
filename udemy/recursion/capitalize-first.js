function capitalizeFirst(arr) {
  let result = [];

  function helper(arr) {
    if (!arr.length) return;

    if (arr.length > 0) {
      result.push(arr[0][0].toUpperCase() + arr[0].substr(1));
    }

    helper(arr.slice(1));
  }

  helper(arr);

  return result;
}

const result = capitalizeFirst(["car", "taco", "banana"]);
console.log(result);
