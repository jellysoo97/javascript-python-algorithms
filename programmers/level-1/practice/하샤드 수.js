function solution(x) {
  const sum = (x + "").split("").reduce((prev, cur) => +prev + +cur);

  return x % sum === 0;
}

function solution2(x) {
  let num = x;
  let sum = 0;

  do {
    sum += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);

  return !(num % sum);
}
