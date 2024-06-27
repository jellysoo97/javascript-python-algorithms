// 암호 만들기
const fs = require("fs");
let [input1, input2] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");
const [L, C] = input1.split(" ").map(Number);
const alphabets = input2.split(" ").sort();
let result = [];

function backtracking(startIndex, str) {
  console.log("start", startIndex, "str", str);
  if (str.length === L) {
    const vowelCount = str.match(/[aeiou]/g)?.length;

    if (vowelCount >= 1 && L - vowelCount >= 2) result.push(str);
  } else {
    // [ 'a', 'c', 'i', 's', 't', 'w' ]
    //   ----------------------------
    //    a, ac, aci, acis(stop)
    //                acit(stop)
    //                aciw(stop)
    //           acs, acst(stop)
    //                acsw(stop)
    //         ----------------------
    //              -----------------
    //                   ------------
    //                        -------
    //                            ---
    for (let i = startIndex; i < C; i++) {
      backtracking(i + 1, str + alphabets[i]);
    }
  }
}

backtracking(0, "");

result.forEach((elem) => console.log(elem));
