function solution(s) {
  let cnt = 0;
  let arr = s.split("");
  const pair = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  if (arr.length % 2 !== 0) {
    return 0;
  }

  for (let i = 0; i < s.length; i++) {
    if (i > 0) {
      arr.push(arr.shift());
    }

    // 쌍이 맞으면 stack.pop(), 안맞으면 stack.push(cur)
    let pairArr = arr.reduce((acc, cur) => {
      if (acc.length && cur === pair[acc[acc.length - 1]]) {
        acc.pop();
      } else {
        acc.push(cur);
      }

      return acc;
    }, []);

    if (!pairArr.length) {
      cnt++;
    }
  }

  return cnt;
}
