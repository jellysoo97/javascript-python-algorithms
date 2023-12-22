function solution(n) {
  const sqrt = Math.sqrt(n);

  // or Number.isInteger(sqrt)
  if (sqrt % 1 === 0) {
    return (sqrt + 1) ** 2;
  }

  return -1;
}
