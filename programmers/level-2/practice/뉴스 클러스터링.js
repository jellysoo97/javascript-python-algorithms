// sol1
// 테스트 1 〉	통과 (0.67ms, 33.5MB)
// 테스트 2 〉	통과 (0.48ms, 33.4MB)
// 테스트 3 〉	통과 (0.37ms, 33.5MB)
// 테스트 4 〉	통과 (29.87ms, 34.9MB)
// 테스트 5 〉	통과 (0.40ms, 33.4MB)
// 테스트 6 〉	통과 (0.35ms, 33.5MB)
// 테스트 7 〉	통과 (1.21ms, 33.9MB)
// 테스트 8 〉	통과 (0.42ms, 33.5MB)
// 테스트 9 〉	통과 (1.16ms, 33.8MB)
// 테스트 10 〉	통과 (2.11ms, 34.5MB)
// 테스트 11 〉	통과 (6.63ms, 34.8MB)
// 테스트 12 〉	통과 (0.29ms, 33.5MB)
// 테스트 13 〉	통과 (0.84ms, 33.6MB)
function solution(str1, str2) {
  const set1 = generateMultipleSet(str1);
  const set2 = generateMultipleSet(str2);
  const count1 = countMultipleSet(set1);
  const count2 = countMultipleSet(set2);
  const intersection = Object.entries(count1)
    .map(([str, count]) => (count2[str] ? Math.min(count, count2[str]) : 0))
    .reduce((prev, acc) => prev + acc, 0);
  const union =
    Object.entries(count1)
      .map(([str, count]) =>
        count2[str] ? Math.max(count, count2[str]) : count
      )
      .reduce((prev, acc) => prev + acc, 0) +
    Object.entries(count2)
      .map(([str, count]) => (count1[str] ? 0 : count))
      .reduce((prev, acc) => prev + acc, 0);
  const jaccard = !intersection && !union ? 1 : intersection / union;

  return Math.floor(jaccard * 65536);
}

function generateMultipleSet(str) {
  let multipleSet = [];

  for (let i = 0; i < str.length - 1; i++) {
    multipleSet.push(`${str[i]}${str[i + 1]}`);
  }

  return multipleSet
    .filter((str) => /^[a-zA-Z]*$/g.test(str))
    .map((str) => str.toUpperCase());
}

function countMultipleSet(arr) {
  const keys = [...new Set(arr)];
  let count = Object.fromEntries(keys.map((key) => [key, 0]));

  for (const str of arr) {
    if (keys.includes(str)) {
      count = { ...count, [str]: count[str] + 1 };
    }
  }

  return count;
}

// sol2
// 테스트 1 〉	통과 (0.50ms, 33.5MB)
// 테스트 2 〉	통과 (0.48ms, 33.6MB)
// 테스트 3 〉	통과 (0.45ms, 33.6MB)
// 테스트 4 〉	통과 (11.01ms, 35.6MB)
// 테스트 5 〉	통과 (0.29ms, 33.5MB)
// 테스트 6 〉	통과 (0.23ms, 33.4MB)
// 테스트 7 〉	통과 (1.02ms, 33.5MB)
// 테스트 8 〉	통과 (0.50ms, 33.4MB)
// 테스트 9 〉	통과 (0.85ms, 33.4MB)
// 테스트 10 〉	통과 (0.98ms, 33.5MB)
// 테스트 11 〉	통과 (1.90ms, 33.7MB)
// 테스트 12 〉	통과 (0.22ms, 33.6MB)
// 테스트 13 〉	통과 (0.44ms, 33.5MB)
function solution(str1, str2) {
  // 1. 다중집합을 만든다
  const generateMultipleSet = (str) => {
    let multipleSet = [];

    for (let i = 0; i < str.length - 1; i++) {
      // String.substring(indexStart, indexEnd+1): 문자열 자르기
      const elem = str.substring(i, i + 2);

      if (/^[a-zA-Z]*$/g.test(elem)) {
        multipleSet.push(elem.toUpperCase());
      }
    }

    return multipleSet;
  };

  const set1 = generateMultipleSet(str1);
  const set2 = generateMultipleSet(str2);
  // 2. 모든 문자열 원소를 가지는 집합을 만든다
  const unitedSet = new Set([...set1, ...set2]);
  let intersection = 0;
  let union = 0;

  // 3. 모집단 원소 하나하나에 대하여
  unitedSet.forEach((str) => {
    // 각 다중집합에서의 개수를 구한다
    const count1 = set1.filter((elem) => elem === str).length;
    const count2 = set2.filter((elem) => elem === str).length;

    // 4. 교집합에는 min을, 합집합에는 max를 더한다.
    intersection += Math.min(count1, count2);
    union += Math.max(count1, count2);
  });

  const jaccard = !union ? 1 : intersection / union;

  return Math.floor(jaccard * 65536);
}
