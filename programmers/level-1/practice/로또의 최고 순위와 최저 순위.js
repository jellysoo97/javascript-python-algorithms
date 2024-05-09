function solution(lottos, winNums) {
  const ranking = {
    0: 6,
    1: 6,
    2: 5,
    3: 4,
    4: 3,
    5: 2,
    6: 1,
  };
  let lottoCount = 0;
  let zeroCount = 0;

  lottos.forEach((lotto) => {
    if (!lotto) zeroCount++;
    if (winNums.includes(lotto)) lottoCount++;
  });

  return [ranking[lottoCount + zeroCount], ranking[lottoCount]];
}
