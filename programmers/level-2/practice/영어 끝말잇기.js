// 영어 끝말잇기
// 탈락자 -> 이전 사람이 말한 단어의 마지막 문자로 시작하는 단어가 아님 or 등장했던 단어를 또 말함
// 탈락자가 있으면 [i % n, Math.floor(i/n)] 리턴
// 없으면 [0, 0] 리턴
function solution(n, words) {
  let alreadyWords = new Set();

  for (let i = 0; i < words.length; i++) {
    if (
      i > 0 &&
      (!words[i].startsWith(words[i - 1][words[i - 1].length - 1]) ||
        alreadyWords.has(words[i]))
    ) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    alreadyWords.add(words[i]);
  }

  return [0, 0];
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);

console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
