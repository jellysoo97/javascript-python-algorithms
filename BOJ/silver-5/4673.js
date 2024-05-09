// 셀프 넘버
const LIMIT = 10000;
const arr = new Array(LIMIT).fill(0).map((_, index) => index + 1);
let generatorArr = [];

// 1~10000까지 배열에 다 집어넣고
// loop 돌리면서 생성자 배열에 생성자 추가
// loop 나와서 생성자 아닌 수 = 셀프 넘버들만 골라내기
for (let i = 0; i < arr.length; i++) {
  const generator =
    arr[i] +
    arr[i]
      .toString()
      .split("")
      .reduce((prev, cur) => prev + parseInt(cur), 0);

  if (arr.includes(generator)) generatorArr.push(generator);
}

const selfNumberArr = arr.filter((num) => !generatorArr.includes(num));

selfNumberArr.forEach((num) => console.log(num));

// range error: maximum call stack size exceeded
// function recursion(n) {
//   // generator sol1
//   // const generator =
//   //   n +
//   //   (Math.floor(n / 1000) % 10) +
//   //   (Math.floor(n / 100) % 10) +
//   //   (Math.floor(n / 10) % 10) +
//   //   (Math.floor(n / 1) % 10);
//   // generator sol2
//   // const generator =
//   //   n +
//   //   n
//   //     .toString()
//   //     .split("")
//   //     .reduce((prev, cur) => prev + parseInt(cur), 0);

//   // base case
//   if (generator > LIMIT) return;

//   generatorArr.push(generator);
//   generatorArr = [...new Set(generatorArr)];

//   // different input
//   return recursion(n + 1);
// }

// recursion(1);

// const selfNumberArr = [
//   ...new Array(LIMIT)
//     .fill(0)
//     .map((_, index) => index + 1)
//     .filter((num) => !generatorArr.includes(num)),
// ];

// console.log(selfNumberArr);
// selfNumberArr.forEach((selfNum) => console.log(selfNum));
