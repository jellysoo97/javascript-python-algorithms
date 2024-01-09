// sol1
function solution(k, tangerine) {
  const sortedArr = tangerine.sort((a, b) => a - b);
  let cnt = [1];

  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      cnt[cnt.length - 1]++;
    } else {
      cnt.push(1);
    }
  }

  cnt = cnt.sort((a, b) => b - a);
  let result = 0;
  let index = 0;

  while (k > 0) {
    if (k - cnt[index] <= 0) {
      result++;
      break;
    }

    k -= cnt[index];
    result++;
    index++;
  }

  return result;
}

// sol2 -> faster
// 테스트 1 〉	통과 (3.01ms, 37.2MB)
// 테스트 2 〉	통과 (3.61ms, 37.2MB)
// 테스트 3 〉	통과 (2.74ms, 37.3MB)
// 테스트 4 〉	통과 (3.49ms, 37.3MB)
// 배열내 중복 요소 개수 구하기
// object key-value로 접근 -> key가 같은 value + 1
// dict = {}
// arr.forEach((elem) => dict[elem] = (dict[elem] || 0) + 1)
function solution(k, tangerine) {
  let result = 0;
  const dict = {};

  tangerine.forEach((t) => (dict[t] = (dict[t] || 0) + 1));
  const cntArr = Object.values(dict).sort((a, b) => b - a);

  for (const cnt of cntArr) {
    result++;

    if (cnt < k) {
      k -= cnt;
    } else {
      break;
    }
  }

  return result;
}
