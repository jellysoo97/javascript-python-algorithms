function solution(n, a, b) {
  let cnt = 0;
  let bigger = Math.max(a, b);
  let smaller = Math.min(a, b);

  for (let i = 1; i < Math.sqrt(n) + 1; i++) {
    if (smaller % 2 === 1 && bigger - 1 === smaller) {
      cnt = i;
      break;
    }

    bigger = Math.ceil(bigger / 2);
    smaller = Math.ceil(smaller / 2);
  }

  return cnt;
}
