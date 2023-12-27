function solution(num) {
  let cnt = 0;

  while (cnt <= 500 && num !== 1) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    cnt++;
  }

  return num === 1 ? cnt : -1;
}
