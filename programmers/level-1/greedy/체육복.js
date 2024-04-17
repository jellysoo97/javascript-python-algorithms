function solution(n, lost, reserve) {
  // 도난 당한 학생이 없으면 early return n
  if (!lost.length) {
    return n;
  }

  // 도난 당한 학생이 있지만 여벌 체육복 가져온 학생이 없으면 early return
  if (lost.length > 0 && !reserve.length) {
    return n - lost.length;
  }

  // 값이 같으면 빌려줄 수 없으므로 제외
  let lostArr = lost
    .filter((elem) => !reserve.includes(elem))
    .sort((a, b) => a - b);
  let reserveArr = reserve
    .filter((elem) => !lost.includes(elem))
    .sort((a, b) => a - b);

  // loop for lostArr
  lostArr.forEach((elem) => {
    // 여분이 없으면 break
    if (!reserveArr.length) return;

    // 여분이 있으면 reserveArr, lostArr에서 제거
    if (reserveArr.includes(elem - 1) || reserveArr.includes(elem + 1)) {
      lostArr = lostArr.slice(1);
      reserveArr = reserveArr.slice(1);
    }
  });

  return n - lostArr.length;
}
