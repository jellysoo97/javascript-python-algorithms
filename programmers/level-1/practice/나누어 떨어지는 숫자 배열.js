// sol1
function solution(arr, divisor) {
  let result = [];

  arr.map((item) => {
    if (item % divisor === 0) {
      result.push(item);
    }
  });

  return result.length ? result.sort((a, b) => a - b) : [-1];
}

// sol2
function solution(arr, divisor) {
  const result = arr.filter((item) => item % divisor === 0);

  return result.length ? result.sort((a, b) => a - b) : [-1];
}
