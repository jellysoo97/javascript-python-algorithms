function capitalizeWords(arr) {
  let result = [];

  function helper(inner) {
    // base case
    if (!inner.length) return;

    if (inner.length) {
      result.push(inner[0].toUpperCase());
    }

    // different input
    helper(inner.slice(1));
  }

  helper(arr);

  return result;
}

const result = capitalizeWords(["car", "taco", "banana"]);
console.log(result);
