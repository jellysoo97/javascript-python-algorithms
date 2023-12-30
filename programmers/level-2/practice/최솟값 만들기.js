// sol1
function solution(A, B) {
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);
  let sum = 0;

  for (let i = 0; i < sortedA.length; i++) {
    sum += sortedA[i] * sortedB[i];
  }

  return sum;
}

// sol2
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((acc, curr, index) => acc + curr * B[index], 0);
}
