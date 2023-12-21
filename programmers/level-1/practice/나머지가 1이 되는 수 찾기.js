function solution(n) {
  let x = 1;

  while (x > 0) {
    if (n % x === 1) {
      return x;
    }

    x++;
  }
}
