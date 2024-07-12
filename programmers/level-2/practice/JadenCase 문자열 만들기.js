// JadenCase 문자열 만들기
// 출력: 모든 단어의 첫 문자가 대문자이고 그 외의 알파벳은 소문자인 문자열로 변환한 문자열
// s -> 알파벳, 숫자(단어의 첫문자로만), 공백문자(연속 가능)
// 공백 기준으로 split
// 전체 소문자로 변환
// 첫문자를 대문자로 변환, 숫자면 pass
// 공백 기준으로 join
function solution(s) {
  let arr = s.split(" ").map((elem) => elem.toLowerCase());
  const regex = /^[a-z]$/;

  // elem -> 배열의 각 요소를 참조(배열의 요소가 elem에 복사, elem은 요소를 가리킴), 원본 배열 수정X
  // sol1: arr[index] = elem.replace()로 직접 수정
  arr.forEach((elem, i) => {
    if (regex.test(elem[0]))
      arr[i] = elem.replace(elem[0], elem[0].toUpperCase());
  });
  // sol2: map으로 새로운 배열 반환
  // arr = arr.map((elem) =>
  //   regex.test(elem[0]) ? elem.replace(elem[0], elem[0].toUpperCase()) : elem
  // );

  return arr.join(" ");
}

// sol2: 정규식으로만
// \w: word character, 알파벳 대소문자 + 숫자 + 언더바 = [a-zA-Z0-9_]
// \b : 문자(\w)와 비문자(\W) 사이의 경계 ex) 'test case' -> /\b\w/ 이면 '공백+c'이니까 'c'를 가리킴
function solution(s) {
  return s
    .replace(/\w/g, (str) => str.toLowerCase())
    .replace(/\b\w/g, (str) => str.toUpperCase());
}

solution("3   unFollowed   me");
solution("3people unFollowed me");
solution("for the last week");
