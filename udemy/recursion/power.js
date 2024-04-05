function power(num1, num2) {
  // base case
  if (num2 === 0) return 1;

  // different input
  return num1 * power(num1, num2 - 1);
}

console.log(power(2, 4));
