function solution(citations) {
  const sortedArr = citations.sort((a, b) => b - a);
  let hIndex = 0;

  while (hIndex + 1 <= sortedArr[hIndex]) {
    hIndex++;
  }

  return hIndex;
}
