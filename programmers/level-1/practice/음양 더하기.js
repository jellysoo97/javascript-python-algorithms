// sol1
function solution(absolutes, signs) {
  let sum = 0;

  signs.map((sign, index) => {
    if (sign) {
      sum += absolutes[index];
      return;
    }

    sum -= absolutes[index];
  });

  return sum;
}

// sol2
function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, curr, index) => acc + curr * (signs[index] ? 1 : -1),
    0
  );
}
