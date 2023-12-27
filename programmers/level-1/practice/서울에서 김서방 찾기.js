// sol1
function solution(seoul) {
  return `김서방은 ${seoul.findIndex((str) => str === "Kim")}에 있다`;
}

// sol2
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}
