// 팀 이름 정하기
// sol1: 문제 잘못 이해
// const fs = require("fs");
// let [name, N, ...teamNames] = fs
//   .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
//   .toString()
//   .trim()
//   .split("\n");
// const nameArr = [...new Set(name.split(""))];
// const nameAlphabetCounts = nameArr.map((alphabet) => [
//   alphabet,
//   (name.match(new RegExp(`${alphabet}`, "g")) || []).length,
// ]);
// let percentages = [];

// for (const teamName of teamNames) {
//   let teamNameAlphabetCounts = nameAlphabetCounts.map(
//     ([alphabet, nameCount]) =>
//       nameCount + (teamName.match(new RegExp(`${alphabet}`, "g")) || []).length
//   );
//   let percentage = 1;

//   for (let i = 0; i < teamNameAlphabetCounts.length - 1; i++) {
//     for (let j = i + 1; j < teamNameAlphabetCounts.length; j++) {
//       percentage *= teamNameAlphabetCounts[i] + teamNameAlphabetCounts[j];
//     }
//   }

//   percentages.push([teamName, percentage % 100]);
// }

// percentages.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
// console.log(percentages);

// sol2
const fs = require("fs");
let [name, N, ...teamNames] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const love = ["L", "O", "V", "E"];
let result = [];

for (const teamName of teamNames) {
  let str = name + teamName;
  let counts = love.map(
    (alphabet) => (str.match(new RegExp(`${alphabet}`, "g")) || []).length
  );
  let percentage = 1;

  for (let i = 0; i < love.length - 1; i++) {
    for (let j = i + 1; j < love.length; j++) {
      percentage *= counts[i] + counts[j];
    }
  }

  result.push([teamName, percentage % 100]);
}

result.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
console.log(result[0][0]);
