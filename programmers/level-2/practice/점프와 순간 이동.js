// 점프와 순간 이동
// 출력: 건전지 사용량의 최솟값
// 이동방법: K칸 점프(건전지 사용량: K) or (현재까지 온 거리)*2로 순간이동(건전지 사용량:0)
// sol1: 재귀
// n이 홀수 -> move(n-1), battery+1
// n이 짝수 -> move(n/2)
function solution(n) {
  let battery = 0;

  function move(distance, battery) {
    if (distance === 1) return battery + 1;

    return distance % 2 === 0
      ? move(distance / 2, battery)
      : move(distance - 1, battery + 1);
  }

  return move(n, battery);
}

// sol2
function solution(n) {
  let battery = 0;

  if (n === 1) return battery + 1;

  while (n > 0) {
    battery += n % 2;
    n = Math.floor(n / 2);
  }

  return battery;
}

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));
