// The mean of Palindrome is When the word or value same so that's A palindrome

// let word = "vraj" so these was not a palindrome

let word = "SMS";

const isPalindrome = (word) => {
  let text = word.toLowerCase();
  let reverse = text.split("").reverse().join("");

  if (text === reverse) {
    console.log(word + " is a palindrome");
  } else {
    console.log(word + " is not a palindrome");
  }
};

isPalindrome(word);

// const isPalindromeLoop = (word) => {
//   let text = word.toLowerCase();
//   let reverse = "";

//   for (let i = text.length - 1; i >= 0; i--) {
//     reverse += text[i];
//   }

//   if (text === reverse) {
//     console.log(word + " is a palindrome");
//   } else {
//     console.log(word + " is not a palindrome");
//   }
// };

// isPalindromeLoop(word);