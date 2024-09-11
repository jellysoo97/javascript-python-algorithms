// "{, }" 제거 -> ,로 split -> 2차원 배열로 변경
// 길이 순으로 오름차순 정렬
// a1, a2, a3, ...an 조합
function solution(s) {
  let result = [];

  s = s
    .split("},")
    .map((elem) =>
      elem.replaceAll("{", "").replaceAll("}", "").split(",").map(Number)
    );
  s.sort((a, b) => a.length - b.length);

  s.forEach((elem) => {
    const newStr = elem.find((str) => !result.includes(str));
    if (newStr) result.push(newStr);
  });

  return result;
}

solution("{{2},{2,1},{2,1,3},{2,1,3,4}}");
