// 보다 명시적으로 표현하고 싶으면 인덱스 대신 [start, end, position] = command
function solution(array, commands) {
  return commands.map((item) => {
    const arr = array.slice(item[0] - 1, item[1]).sort((a, b) => a - b);

    return arr[item[2] - 1];
  });
}
