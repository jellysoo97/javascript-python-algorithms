// sliding window
// 제공된 solution
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // total < sum이고 end가 끝까지 가지 않았으면
    // 윈도우를 오른쪽으로 확장
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // total >= sum이면 조건을 만족시켰으니 최소 길이 업데이트
    // 시작점이 start인 윈도우 최소 길이 구함
    // 다음 시작점으로 start 이동(윈도우 이동)
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // total < sum이지만 end가 배열의 끝에 도달하면 break
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// my solution
function minSubArrayLen(arr, sum) {
  let start = 0;
  let end = 0;
  let total = 0;
  let minLen = Infinity;

  // for문 쓰면 중첩 loop로 O(n^2) -> while문
  // loop if start < arr.length
  while (start < arr.length) {
    // total < sum && end < arr.length이면 end 오른쪽으로 이동
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
      continue;
    }

    // total >= sum이면 minLen 업데이트
    // 다음 start로 넘어가기
    // 겹치는 부분이 있으니까 total 초기화할 필요없이 맨앞만 빼주면 됨
    if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
      continue;
    }

    if (end === arr.length) break;
  }

  return minLen === Infinity ? 0 : minLen;
}
