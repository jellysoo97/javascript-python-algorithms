function solution(n, k) {
  const binary = n.toString(k);
  // 1. '0'으로 split
  // 2. number로 변환, 2이상 elem filter
  const arr = binary
    .split("0")
    .map((num) => +num)
    .filter((num) => num > 1);
  let count = 0;

  // 3. Math.sqrt(elem)까지 for문으로 소수 판별, 소수면 count
  for (const prime of arr) {
    if (prime === 2) {
      count += 1;
      continue;
    }

    for (let i = 2; i < Math.sqrt(prime) + 1; i++) {
      if (prime % i === 0) {
        break;
      }

      if (Math.sqrt(prime) < i && i < Math.sqrt(prime) + 1) count += 1;
    }
  }

  return count;
}
