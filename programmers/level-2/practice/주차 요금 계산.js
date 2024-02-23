// sol1
// 테스트 1 〉	통과 (0.37ms, 33.6MB)
// 테스트 2 〉	통과 (0.21ms, 33.6MB)
// 테스트 3 〉	통과 (0.40ms, 33.5MB)
// 테스트 4 〉	통과 (0.59ms, 33.5MB)
// 테스트 5 〉	통과 (1.20ms, 33.8MB)
// 테스트 6 〉	통과 (1.27ms, 33.6MB)
// 테스트 7 〉	통과 (15.32ms, 36.6MB)
// 테스트 8 〉	통과 (3.17ms, 34.2MB)
// 테스트 9 〉	통과 (2.23ms, 33.9MB)
// 테스트 10 〉	통과 (11.45ms, 36.5MB)
// 테스트 11 〉	통과 (19.98ms, 36.8MB)
// 테스트 12 〉	통과 (20.24ms, 36.6MB)
// 테스트 13 〉	통과 (0.35ms, 33.5MB)
// 테스트 14 〉	통과 (0.31ms, 33.4MB)
// 테스트 15 〉	통과 (0.22ms, 33.4MB)
// 테스트 16 〉	통과 (0.22ms, 33.6MB)
function solution(fees, records) {
  const [basicTime, basicFee, unitTime, unitFee] = fees;
  const carNumbers = [
    ...new Set(records.map((record) => record.split(" ")[1])),
  ].sort((a, b) => a - b);
  let recordArr = records.map((record) => record.split(" "));
  let result = [];

  // 1. 시간 분단위 계산 함수
  // in, out time 받아서 hour * 60 + min
  const caculateMinTime = (time) => {
    return time
      .split(":")
      .map((time, index) => (index === 0 ? +time * 60 : +time))
      .reduce((prev, acc) => prev + acc, 0);
  };

  // 2. 주차비 계산 함수
  // 기본 시간 초과 ? 기본요금 + 올림(누적시간/단위시간)*단위요금 : 기본요금
  const caculateTotalFee = (totalTime) => {
    return totalTime > basicTime
      ? basicFee + Math.ceil((totalTime - basicTime) / unitTime) * unitFee
      : basicFee;
  };

  // 3. carNumbers for문
  for (const carNumber of carNumbers) {
    // 4. 같은 차번호 record 전부 찾고 in, out time 배열 만들기
    let inOutTimes = recordArr
      .filter((record) => record[1] === carNumber)
      .map((record) => record[0]);
    // 5. time 배열 길이가 홀수면 = 출차기록이 없으면 23:59 추가
    inOutTimes =
      inOutTimes.length % 2 === 0 ? inOutTimes : inOutTimes.concat("23:59");
    // 6. 누적 주차시간 계산
    const totalTime = inOutTimes
      .map((time, index) =>
        index % 2 === 0
          ? caculateMinTime(inOutTimes[index + 1]) - caculateMinTime(time)
          : 0
      )
      .reduce((prev, acc) => prev + acc, 0);

    // 7. 주차비 계산
    result.push(caculateTotalFee(totalTime));
  }

  return result;
}

// sol2
// 테스트 1 〉	통과 (0.39ms, 33.5MB)
// 테스트 2 〉	통과 (0.15ms, 33.4MB)
// 테스트 3 〉	통과 (0.34ms, 33.7MB)
// 테스트 4 〉	통과 (0.42ms, 33.6MB)
// 테스트 5 〉	통과 (0.72ms, 33.6MB)
// 테스트 6 〉	통과 (0.74ms, 33.6MB)
// 테스트 7 〉	통과 (3.33ms, 34.4MB)
// 테스트 8 〉	통과 (2.29ms, 34.1MB)
// 테스트 9 〉	통과 (0.74ms, 33.7MB)
// 테스트 10 〉	통과 (3.16ms, 34.4MB)
// 테스트 11 〉	통과 (3.84ms, 34.6MB)
// 테스트 12 〉	통과 (3.57ms, 34.7MB)
// 테스트 13 〉	통과 (0.19ms, 33.6MB)
// 테스트 14 〉	통과 (0.18ms, 33.4MB)
// 테스트 15 〉	통과 (0.16ms, 33.4MB)
// 테스트 16 〉	통과 (0.14ms, 33.5MB)
function solution(fees, records) {
  const [basicTime, basicFee, unitTime, unitFee] = fees;
  let parkingTime = {};
  let result = [];

  records.forEach((record) => {
    const [time, carNumber, type] = record.split(" ");
    const [hour, min] = time.split(":");
    const timeToMin = hour * 60 + min;

    if (!parkingTime[carNumber]) parkingTime[carNumber] = 0;
    if (type === "IN") parkingTime[carNumber] += 1439 - timeToMin;
    if (type === "OUT") parkingTime[carNumber] -= 1439 - timeToMin;
  });

  for (const [_, totalTime] of Object.entries(parkingTime).sort(
    (a, b) => a[0] - b[0]
  )) {
    const parkingFee =
      totalTime > basicTime
        ? basicFee + Math.ceil((totalTime - basicTime) / unitTime) * unitFee
        : basicFee;

    result.push(parkingFee);
  }

  return result;
}
