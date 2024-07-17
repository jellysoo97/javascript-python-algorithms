// 실습용 로봇
// 출력: 명령을 모두 수행한 뒤 도착한 최종 위치의 좌푯값 [x,y]
// commands 순회
// "R" or "L" -> direction 변경, 왼쪽으로 90 회전 = 오른쪽으로 90씩 3번 회전
// "G" or "B" -> location 이동, direction과 command에 따라 이동
function solution(commands) {
  let location = [0, 0];
  let direction = 0;
  const moves = [
    { G: [0, 1], B: [0, -1] },
    { G: [1, 0], B: [-1, 0] },
    { G: [0, -1], B: [0, 1] },
    { G: [-1, 0], B: [1, 0] },
  ];

  for (const command of commands.split("")) {
    switch (command) {
      case "R":
        direction++;
        direction %= 4;
        break;
      case "L":
        direction += 3;
        direction %= 4;
        break;
      case "G":
      case "B":
        location = location.map((loc, i) => loc + moves[direction][command][i]);
        break;
    }
  }

  return location;
}

console.log(solution("GRGLGRG"));
console.log(solution("GRGRGRB"));
