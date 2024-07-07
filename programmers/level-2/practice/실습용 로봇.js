// 출력: 명령을 모두 수행한 후 마지막 위치
// R: 오른쪽으로 90도 회전
// L: 왼쪽으로 90도 회전
// G: 한 칸 전진
// B: 한 칸 후진
// command를 순회
// R or L: direction 업데이트
// G or B: coordinate 업데이트
function solution(commands) {
  let direction = 0;
  let coordinate = [0, 0];

  for (const command of commands.split("")) {
    if (command === "R") direction += 1;
    else if (command === "L") direction -= 1;
    else {
      direction %= 4;
      if (direction < 0) direction += 4;
      if (direction === 0) coordinate[1] += command === "G" ? 1 : -1;
      else if (direction === 1) coordinate[0] += command === "G" ? 1 : -1;
      else if (direction === 2) coordinate[1] += command === "G" ? -1 : 1;
      else coordinate[0] += command === "G" ? -1 : 1;
    }
  }

  return coordinate;
}
