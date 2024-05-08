function findArrayIndex(array, text) {
  let position = array.indexOf(text);
  return position;
}

function removeItem(array, text) {
  array.splice(findArrayIndex(array, text), 1);
  return array;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(mainCharacters);
console.log(findArrayIndex(mainCharacters, "Rey"));
console.log(removeItem(mainCharacters, "Rey"));
