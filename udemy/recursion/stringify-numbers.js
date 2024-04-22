function stringifyNumbers(obj) {
  const entries = Object.entries(obj);
  let result = {};

  entries.forEach(([key, value]) => {
    // base case
    if (typeof value === "number") {
      result[key] = value.toString();
      return;
    }

    // different input
    if (typeof value === "object" && !Array.isArray(value)) {
      result[key] = stringifyNumbers(value);
      return;
    }

    result[key] = value;
  });

  return result;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

stringifyNumbers(obj);

// {
//   num: "1",
//   test: [],
//   data: {
//       val: "4",
//       info: {
//           isRight: true,
//           random: "66"
//       }
//   }
// }
