// sol1
function solution(numbers) {
  let sum = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      sum += i;
    }
  }

  return sum;
}

// sol2
// 45 -> n(n+1)/2
// n이 커지면 sol2 better
function solution(numbers) {
  return 45 - numbers.reduce((acc, curr) => acc + curr, 0);
}
