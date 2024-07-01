// 연속 펄스 부분 수열의 합
// 출력: 연속 펄스 부분 수열의 합 중 가장 큰 것
// 1. sequence에 펄스 수열 (홀: -1, 짝: 1) or (홀: 1, 짝: -1)을 곱한다.
// 2. 연속 펄스 부분 수열의 최대 합을 구하는 함수
// 2-1.   부분합과 최대합을 첫번째 인덱스로 초기화
// 2-2.   인덱스 1부터 loop 돈다.
// 2-3.     부분합+현재값, 현재값을 비교한다. 이전 부분합에 계속 더해 나갈건지 아니면 새로 부분합을 시작할건지 결정
// 2-4.     부분합 > 최대합이면 바꾼다.
// 2-5.   최대합 리턴
// 3. sequence1 최대합, sequence2 최대합 중 최대값을 리턴한다.
function solution(sequence) {
  const sequence1 = sequence.map(
    (elem, index) => elem * (index % 2 === 0 ? 1 : -1)
  );
  const sequence2 = sequence.map(
    (elem, index) => elem * (index % 2 === 0 ? -1 : 1)
  );

  function getSumMax(sequence) {
    let partSum = sequence[0];
    let maxSum = sequence[0];

    for (const num of sequence.slice(1)) {
      // 이전 부분합에 num을 더한 값이 큰지, num부터 새로 부분합을 시작하는게 큰지 비교 -> 큰 값을 부분합으로
      partSum = Math.max(num, partSum + num);
      // 현재 부분합 > 최대합이면 바꿔줌
      if (partSum > maxSum) {
        maxSum = partSum;
      }
    }

    return maxSum;
  }

  return Math.max(getSumMax(sequence1), getSumMax(sequence2));
}

solution([2, 3, -6, 1, 3, -1, 2, 4]);
solution([5, -5, -9, -2, 10, -8, 9]);
// 5 5 -9 2 10 8 9
// -5 5 9 -2 -10 -8 -9
