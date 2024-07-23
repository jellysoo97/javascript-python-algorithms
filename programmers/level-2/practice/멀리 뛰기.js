// 멀리 뛰기
// n을 1 또는 2의 합으로 나타낼 수 있는 가짓수
// sol1
// 2의 개수 0 ~ Math.floor(n/2)까지 1씩 증가 -> 정렬 가짓수
// 정수 오버플로우 주의 -> BigInt로, BigInt는 BigInt끼리만 연산이 가능하기 때문에 모두 바꿔줘야 함
function solution(n) {
  let result = 0n;

  function factorial(k) {
    return Array.from({ length: k }, (_, index) => BigInt(index + 1)).reduce(
      (prev, cur) => prev * cur,
      BigInt(1)
    );
  }

  for (let i = 0; i <= Math.floor(n / 2); i++) {
    result += factorial(n - i) / (factorial(n - i * 2) * factorial(i));
  }

  return result % 1234567n;
}

// sol2: 피보나치
function solution(n) {
  let arr = [1n, 2n];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  console.log(arr[n - 1] % 1234567);
  return arr[n - 1] % 1234567n;
}

// solution(4);
// solution(3);
solution(50);
solution(53);
