function solution(s) {
  const upperStr = s.toUpperCase();

  return upperStr.split("P").length === upperStr.split("Y").length
    ? true
    : false;
}

function solution2(s) {
  const lowerStr = s.toLowerCase();

  return lowerStr.match(/p/g)?.length === lowerStr.match(/y/g)?.length;
}
