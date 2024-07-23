// 예상 대진표
// 라운드 -> 카운트+1, 짝수면 a / 2 , 홀수면 (a+1) / 2
// a, b가 붙는다 -> 같은 조이고 a, b의 차이가 1
function solution(n, a, b) {
  let result = 0;

  while (result < Math.sqrt(n)) {
    if (Math.ceil(a / 2) === Math.ceil(b / 2) && Math.abs(a - b) === 1) break;

    result++;
    a = getNextRoundNumber(a);
    b = getNextRoundNumber(b);
  }

  return result + 1;
}

function getNextRoundNumber(k) {
  return k % 2 === 0 ? k / 2 : (k + 1) / 2;
}

solution(8, 4, 7);
