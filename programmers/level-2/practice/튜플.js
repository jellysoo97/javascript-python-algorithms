function solution(s) {
  const arr = s
    .slice(2, -2)
    .split("},{")
    .sort((a, b) => a.length - b.length);
  let result = [];

  for (const elem of arr) {
    const temp = elem.split(",");

    for (const str of temp) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  }

  return result.map((str) => +str);
}
