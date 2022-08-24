var Animal = function () {};
Animal.prototype.eat = function () {
  console.log("They eat food to survive.");
};

var Mammal = function () {};
Mammal.prototype = new Animal(); //Mammal inherits from Animals
Mammal.prototype.giveBirth = function () {
  console.log("They give birth to young ones.");
};

var elephant = new Mammal(); //Creating instance of type Mammal
elephant.eat(); //elephant can use the inherited method from Animal.
elephant.giveBirth();

console.log(elephant instanceof Mammal);
console.log(elephant instanceof Animal);
