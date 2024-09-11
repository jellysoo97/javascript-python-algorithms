// h번 이상 인용된 논문이 h편 이상, 나머지는 h편 이하 인용
// h번 이상 인용된 논문 수 <= 인용횟수이면 loop -> HIndex++
function solution(citations) {
  let hIndex = 0;
  citations.sort((a, b) => b - a);

  while (hIndex + 1 <= citations[hIndex]) {
    hIndex++;
  }

  return hIndex;
}

solution([3, 0, 6, 1, 5]);
