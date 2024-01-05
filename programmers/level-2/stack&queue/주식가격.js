// O(n^2)
function solution(prices) {
  let arr = [];
  let cnt = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      cnt++;

      if (prices[i] > prices[j]) {
        break;
      }
    }

    arr.push(cnt);
    cnt = 0;
  }

  return arr;
}
