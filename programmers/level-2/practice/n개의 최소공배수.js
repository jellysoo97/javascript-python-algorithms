// 최대공약수
// 1. 2부터 a,b 중 작은 수까지 for loop, a % i === 0 && b % i === 0이면 break
// 2. a % b === 0 이면 b, 아니면 재귀(b와 a%b)
// 최소공배수
// lcm = (a * b) / gcd(a,b)
// sol1
function solution(arr) {
  let cm = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    cm = (arr[i] * arr[i + 1]) / calculateGcd(arr[i], arr[i + 1]);
    arr[i + 1] = cm;
  }

  return cm;
}

function calculateGcd(a, b) {
  let gcd = 1;

  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }

  return gcd;
}

// sol2
function solution(arr) {
  return arr.reduce((acc, cur) => (acc * cur) / calculateGcd(acc, cur));
}

function calculateGcd(a, b) {
  return a % b === 0 ? b : calculateGcd(b, a % b);
}
