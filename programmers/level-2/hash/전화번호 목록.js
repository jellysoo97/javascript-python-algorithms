// 전화번호부 loop
// elem - elem으로 시작하는 전화번호 리스트 hash 생성
// hash values의 길이가 0이면 true, 아니면 false
// 접두어인 경우가 있으면 바로 break
function solution(phone_book) {
  phone_book.sort();

  const result = phone_book.some((elem, index) =>
    phone_book[index + 1]?.startsWith(elem)
  );

  return !result;
}

solution(["119", "97674223", "1195524421"]);
solution(["123", "456", "789"]);
solution(["12", "123", "1235", "567", "88"]);
