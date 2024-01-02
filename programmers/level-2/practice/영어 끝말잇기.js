function solution(n, words) {
  let wordArr = [];
  let index = 0;

  for (let i = 0; i < words.length; i++) {
    if (wordArr.includes(words[i])) {
      index = i + 1;
      break;
    }

    // 다음 인덱스 값이 잘못된 값 -> (i + 1) + 1
    if (words[i + 1] && words[i][words[i].length - 1] !== words[i + 1][0]) {
      index = i + 2;
      break;
    }

    wordArr.push(words[i]);
  }

  const number = index % n === 0 ? n - (index % n) : index % n;

  return index > 0 ? [number, Math.ceil(index / n)] : [0, 0];
}
