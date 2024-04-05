function factorial(num) {
  // base case
  if (num <= 1) return 1;

  // different input
  return num * factorial(num - 1);
}
