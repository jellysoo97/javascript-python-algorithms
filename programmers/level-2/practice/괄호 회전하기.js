// sol1 : 완전탐색
// 테스트 1 〉	통과 (67.24ms, 37MB)
// 테스트 2 〉	통과 (52.02ms, 36.5MB)
// 테스트 3 〉	통과 (71.44ms, 36.2MB)
// 테스트 4 〉	통과 (50.81ms, 36MB)
// 테스트 5 〉	통과 (49.84ms, 35.9MB)
// 테스트 6 〉	통과 (50.92ms, 36.2MB)
// 테스트 7 〉	통과 (77.39ms, 36.2MB)
// 테스트 8 〉	통과 (64.69ms, 36MB)
// 테스트 9 〉	통과 (43.97ms, 36MB)
// 테스트 10 〉	통과 (40.97ms, 36.1MB)
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

// sol2
// 테스트 1 〉	통과 (14.51ms, 38.6MB)
// 테스트 2 〉	통과 (9.06ms, 38.6MB)
// 테스트 3 〉	통과 (9.39ms, 38.5MB)
// 테스트 4 〉	통과 (12.04ms, 38.5MB)
// 테스트 5 〉	통과 (36.89ms, 38.2MB)
// 테스트 6 〉	통과 (18.65ms, 38.7MB)
// 테스트 7 〉	통과 (20.95ms, 38.6MB)
// 테스트 8 〉	통과 (26.35ms, 38.6MB)
// 테스트 9 〉	통과 (56.64ms, 38.3MB)
// 테스트 10 〉	통과 (83.31ms, 38.3MB)
function solution(s) {
  let arr = s.split("");
  let cnt = 0;
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  if (s.length % 2 !== 0) return 0;

  const isCorrectBracket = (arr) => {
    let stack = [];

    for (const str of arr) {
      // 오른쪽 괄호 먼저 나오면 빠져나오기
      if (!stack.length && !Object.values(map).includes(str)) {
        return false;
      }

      if (Object.values(map).includes(str)) {
        stack.push(str);
      } else if (map[str] !== stack.pop()) {
        return false;
      }
    }

    return stack.length ? false : true;
  };

  for (let i = 0; i < s.length; i++) {
    if (i > 0) {
      arr.push(arr.shift());
    }

    cnt += isCorrectBracket(arr) ? 1 : 0;
  }

  return cnt;
}
