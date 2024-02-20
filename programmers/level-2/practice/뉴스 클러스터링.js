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
  const jaccard = intersection / union || 1;

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
