function collectStrings(obj) {
  let result = [];

  function selectStrings(object) {
    const entries = Object.entries(object);

    entries.forEach(([_, value]) => {
      // base case
      if (typeof value === "string") {
        result.push(value);
      }

      // different input
      if (typeof value === "object" && !Array.isArray(value)) {
        selectStrings(value);
      }
    });
  }

  selectStrings(obj);

  return result;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

const result = collectStrings(obj); // ["foo", "bar", "baz"])
console.log(result);
