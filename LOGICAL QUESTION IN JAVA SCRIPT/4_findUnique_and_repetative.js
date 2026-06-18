// const n = [100, 200, 300, 400, 500, 100, 300];

// const FindValue = (nber) => {
//     let count = {};
//     let UniqueValue = [];
//     let reapetValue = [];

//     for (let num of n){
//         if (count[n]){
//           count[n] += 1;
//         }

//         else{
//             count[n] = 1;
//         }
//     }

//     for (let key in count){
//         if (count[key] === 1) {
//             UniqueValue.push(Number(key));
//         }

//         else {
//             reapetValue.push(Number(key));
//         }
//     }

//     console.log("COUNT =", count);
//     console.log("UniqueValue =", UniqueValue);
//     console.log("ReapeatValue =", reapetValue);
// };

// FindValue(n);



const num = [100, 200, 200, 300, 400, 500, 600, 700, 800, 800, 900, 900, 1000];

const findValue = (num) => {
  let count = {};
  let uniqueVal = [];
  let repetitiveVal = [];

  for (let n of num) {
    if (count[n]) {
      count[n] += 1;
    } else {
      count[n] = 1;
    }
  }

  for (let key in count) {
    if (count[key] === 1) {
      uniqueVal.push(Number(key));
    } else {
      repetitiveVal.push(Number(key));
    }
  }
  console.log("count", count);
  console.log("uniqueVal", uniqueVal);
  console.log("repetitiveVal", repetitiveVal);
};

findValue(num);