// sliding window
// return max of sub array sum

// sol1: nested loop
// O(n^2) -> not good
function maxSubarraySum1(arr, num) {
  if (num > arr.length) {
    return null;
  }

  // max 초기값은 제일 작은 수(-Infinity) 초기화
  let max = -Infinity;

  // loop over arr (index 0 to arr.length - num)
  // loop over num
  // index 0 to num까지의 합 > max이면 max = sum
  for (let i = 0; i < arr.length - num + 1; i++) {
    let sum = 0;

    for (let j = 0; j < num; j++) {
      sum += arr[i + j];
    }

    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

// sol2: loop only once at a time, not nested
// O(n)
function maxSubarraySum2(arr, num) {
  if (arr.length < num) return null;

  // loop over index 0 to num
  // get first sum
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  // loop over index num to arr.length
  // 이전 sum에서 맨 앞을 빼고 맨 뒤를 더하면 다음 sum
  let tempSum = 0;

  for (let i = num; i < arr.length; i++) {
    tempSum += maxSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}
