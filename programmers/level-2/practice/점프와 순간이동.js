function solution(n) {
  let battery = 1;

  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      battery++;
      n = n - 1;
    }
  }

  return battery;
}
