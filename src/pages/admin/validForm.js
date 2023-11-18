export default function validateForm(input = {}) {
  const resValue = {};
  Object.entries(input).forEach((s) => {
    if (s[0] === "name") {
      if (s[1].length < 1) {
        resValue.name = "please enter product name";
      } else {
        if (s[1].length < 5)
          resValue.name = "please enter a valid product name";
      }
    }
    if (s[0] === "brand") {
      if (s[1].length < 1) {
        resValue.brand = "please enter product brand name";
      } else {
        if (s[1].length < 2)
          resValue.brand = "please enter a valid product brand name";
      }
    }
    if (s[0] === "price") {
      if (s[1].length < 1) {
        resValue.price = "please enter product price";
      } else {
        if (s[1] > 1000000 || s[1] < 5)
          resValue.price = "product price is too low or too high";
      }
    }

    if (s[0] === "discount") {
      if (s[1] > 200) {
        resValue.discount = "please enter a valid discount value";
      }
    }
    if (s[0] === "unit") {
      if (s[1] < 1) {
        resValue.unit = "please enter how many product is available";
      }
    }
    if (s[0] === "category") {
      if (s[1].length < 1) {
        resValue.category = "please enter product category";
      }
    }
    if (s[0] === "sub_cat") {
      if (s[1].length < 1) {
        resValue.sub_cat = "please enter product sub category";
      }
    }
  });

  return resValue;
}
