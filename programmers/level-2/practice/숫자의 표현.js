// 숫자의 표현
// 출력: 자연수 n을 연속된 자연수들의 합으로 표현하는 방법의 개수
// 1~n/2까지 반복
// i~i+k까지의 합 < n이면 k++ 반복, 합 = n이면 카운트
// 마지막에 n 하나 카운트
// sol1: 시간초과(87.5%)
function solution(n) {
  let count = 0;

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    let sum = i;
    let k = i;

    while (sum < n) {
      k++;
      sum += k;
      if (sum === n) count++;
    }
  }

  return count + 1;
}

// sol2
function solution(n) {
  let count = 0;

  for (let i = 1; i < n / 2; i++) {
    let sum = i;
    let j = i;

    while (true) {
      j++;
      sum += j;
      if (sum === n) count++;
      if (sum + j + 1 > n) break;
    }
  }

  return count + 1;
}

solution(15);
