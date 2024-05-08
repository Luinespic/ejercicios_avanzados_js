const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
  let word1 = array[index1];
  let word2 = array[index2];
  array.splice(index2, 1, word1);
  array.splice(index1, 1, word2);
  return array;
}

console.log(swap(fantasticFour, 0, 3));
