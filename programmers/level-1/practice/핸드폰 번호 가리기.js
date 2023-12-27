// sol1 : 정규식
function solution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}

// sol2 : repeat() -> better
function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}
