// sliding window
function maxSubarraySum(arr, num) {
  // arr.length < num이면 early return
  if (arr.length < num) {
    return null;
  }

  // index = 0부터 num 길이의 요소들의 sum을 maxSum으로 초기화
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // loop over arr, from num to arr.length
  // 이전 sum에서 앞에 값 빼고 뒤에 값 더하기
  // Math.max()로 최대값 비교
  let tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];

    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}
