// frequency counter or multiple pointer
// sol1: frequency counter
// O(n)
function areThereDuplicates1(...arg) {
  // loop over arg
  // obj[value] 있으면 return true, 없으면 추가
  let obj = {};

  for (const value of arg) {
    if (obj[value]) {
      return true;
    }

    obj[value] = (obj[value] || 0) + 1;
  }

  return false;
}

// 1, 2, 3, 4, 4, 5
// sol2: multiple pointer
// O(n)
function areThereDuplicates2(...arg) {
  // sort arg first
  arg = arg.sort();
  // loop over arg
  // arg[i]와 pointer인 arg[i+1] 비교
  // arg[i] === arg[i+1] 이면 return true
  for (let i = 0; i < arg.length - 1; i++) {
    if (arg[i] === arg[i + 1]) {
      return true;
    }
  }

  return false;
}

console.log(areThereDuplicates1(1, 2, 3));
console.log(areThereDuplicates1(1, 2, 2));
console.log(areThereDuplicates1("a", "b", "c", "a"));

// console.log(areThereDuplicates2(1, 2, 3));
// console.log(areThereDuplicates2(1, 2, 2));
// console.log(areThereDuplicates2("a", "b", "c", "a"));
