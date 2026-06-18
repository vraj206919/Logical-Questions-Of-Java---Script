
// The Mean Of sum Of number is Addition Of the All Value of An Array


const number = [1, 2, 3, 4, 5];

const sumOfNum = number.reduce((acc, curr) => {
  acc += curr;
  return acc;
});

console.log("SumOfNum", sumOfNum);



// // .using for of loop

// const findSumOfNum = (number) => {
//   let sumOfNum = 0;

//   for (let i of number) {
//     sumOfNum += i;
//   }

//   console.log("sumOfNum", sumOfNum);
// };

// findSumOfNum(number);