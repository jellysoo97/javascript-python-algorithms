function solution(brown, yellow) {
  let x = 0;
  let y = 0;
  // yellow = x * y
  // brown = (x + 2) * (y + 2)

  // Math.sqrt(yellow)까지 for loop
  // yellow % i !== 0이면 pass
  // 딱 떨어지면 x = i + 2, y = yellow / x + 2
  // brown + yellow = x * y 만족하면 return
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i !== 0) {
      continue;
    }

    x = yellow / i + 2;
    y = i + 2;

    if (x * y === brown + yellow) {
      return [x, y];
    }
  }
}
