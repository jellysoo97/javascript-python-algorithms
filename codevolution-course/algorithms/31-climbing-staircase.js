// 계단 오르기 climbing staircase : O(n)
// n개의 계단이 있을 때 계단을 올라갈 수 있는 1,2의 쌍의 개수
function climbingStaircase(n) {
  const numOfWays = [1, 2];

  for (let i = 2; i <= n; i++) {
    numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2];
  }

  return numOfWays[n - 1];
}

console.log(climbingStaircase(1)); // 1
console.log(climbingStaircase(2)); // 2
console.log(climbingStaircase(3)); // 3
console.log(climbingStaircase(4)); // 5
console.log(climbingStaircase(5)); // 8
