// Remove the First Element Of the Erray

// using array method

const fruits = ["Apple", "Banana", "Mango"];

console.log("fruits item before Remove the Element : ", fruits);

const removedItem = fruits.shift();

console.log("fruits item after After The Element", fruits);


// using loop Through

const vegetable = ["Carrot", "Chilli", "Potato"];

const removeFirstElement = (vegetable) => {
  const newArray = [];

  for (let i = 1; i < vegetable.length; i++) {
    newArray.push(vegetable[i]);
  }
  console.log("new array : ", newArray);
};

removeFirstElement(vegetable);