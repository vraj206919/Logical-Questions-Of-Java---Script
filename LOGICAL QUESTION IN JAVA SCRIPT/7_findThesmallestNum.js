const number = [10, 300, 405, 600, 689];

// using reduce HOC (Higher-Order Component)

const smallNumber = number.reduce((acc, curr) => {
  if (curr < acc) {
    acc = curr;
  }
  return acc;
});

console.log("small Num", smallNumber);
