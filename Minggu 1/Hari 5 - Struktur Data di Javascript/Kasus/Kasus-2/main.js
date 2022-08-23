let dictionary = new Map();

function addWords(english, indo) {
  dictionary.set(english.toLowerCase(), indo.toLowerCase());
}

function getWords(word) {
  console.log(dictionary.get(word.toLowerCase()));
}

function deleteWords(word) {
  dictionary.delete(word.toLowerCase());
}

addWords("Sing", "Bernyanyi");
addWords("Eat", "Makan");
addWords("Sleep", "Tidur");

getWords("sing");

deleteWords("eat");

console.log(dictionary);
