// N개의 최소공배수
// max부터 1씩 추가하면서 배열의 모든 요소로 나누어 떨어지는 수 찾기
function solution(arr) {
  let lcm = Math.max(...arr);
  let isLcm = false;

  while (!isLcm) {
    for (let i = 0; i < arr.length; i++) {
      if (lcm % arr[i] !== 0) {
        lcm++;
        break;
      }

      if (i === arr.length - 1) isLcm = true;
    }
  }

  return lcm;
}

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

solution([2, 6, 8, 14]);
