const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 24];

// Using Math.max() method

const findMaxNumber = (numbers) => {
  // Get the largest number using the spread operator
  const maximumNumber = Math.max(...numbers);

  console.log("Max number:", maximumNumber);
};

findMaxNumber(numbers);


// // Without using built-in methods

// const findLargestNumber = (numbers) => {
//   // Assume the first element is the largest
//   let largestNumber = numbers[0];

//   // Loop through the array
//   for (let index = 0; index < numbers.length; index++) {
//     // Update largest number if a bigger value is found
//     if (numbers[index] > largestNumber) {
//       largestNumber = numbers[index];
//     }
//   }

//   console.log("Largest number:", largestNumber);
// };

// findLargestNumber(numbers);