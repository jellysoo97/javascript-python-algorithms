function nestedEvenSum(obj) {
  let total = 0;
  const entries = Object.entries(obj);

  // base case
  entries.forEach((entry) => {
    if (typeof entry[1] === "number" && entry[1] % 2 === 0) {
      total += entry[1];
    }

    // different input
    if (typeof entry[1] === "object") {
      total += nestedEvenSum(entry[1]);
    }
  });

  return total;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
