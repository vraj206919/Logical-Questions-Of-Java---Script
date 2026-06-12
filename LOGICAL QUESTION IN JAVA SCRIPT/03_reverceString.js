
// 1. Reverse a string using a for loop

const reverseStringFor = (str) => {
  let reversed = ""; 

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
};

console.log(reverse("Gir no savaj")); 


// 2. Reverse a string using a for...of loop

const reverseStringForOf = (str) => {
  let reversed = ""; 

  for (const char of str) {
  
    reversed = char + reversed;
  }

  return reversed;
};

console.log(reverse("Umm")); 


// 3. Reverse a string using the spread operator

const reverseStringSpread = (str) => {
  return (
    [...str]      
      .reverse()  
      .join("")   
  );
};

console.log(reverse("Nikli Gya"));