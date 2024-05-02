function solution(survey, choices) {
  const scoreObj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  const scoreArr = [3, 2, 1, 0, 1, 2, 3];
  let result = "";

  // survey loop 돌면서 점수 더하기
  survey.forEach((elem, index) => {
    const [disagree, agree] = elem;
    const choice = choices[index];

    choice > 4
      ? (scoreObj[agree] += scoreArr[choice - 1])
      : (scoreObj[disagree] += scoreArr[choice - 1]);
  });

  const arr = Object.entries(scoreObj);

  // 객체의 순서가 보장되지 않아서 not good
  // [[R score, T score], [C score, F score], ...] 묶는 다른 방법 생각해보기
  arr.forEach(([char, score], index) => {
    if (index % 2 !== 0) {
      return;
    }

    score < arr[index + 1][1]
      ? (result += arr[index + 1][0])
      : (result += char);
  });

  return result;
}

solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]);
solution(["TR", "RT", "TR"], [7, 1, 3]);
