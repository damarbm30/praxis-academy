// Create an object that represents a cat. It should have properties for `tiredness`, `hunger`, `loneliness` and `happiness

class Cat {
  constructor() {
    this.tiredness = 0;
    this.hunger = 0;
    this.loneliness = 0;
    this.happiness = 0;
  }

  // Create methods that increase/decrease these properties
  play(tirednessVal, lonelinessVal, happinessVal, hungerVal) {
    this.tiredness += tirednessVal;
    this.hunger += hungerVal;
    this.loneliness -= lonelinessVal;
    this.happiness += happinessVal;
  }

  //   Last, write a method that prints out the cat's status in each area.
  status() {
    const isTired = "The cat is tired";
    const isNotTired = "The cat is not tired";
    const isHungry = "The cat is hungry";
    const isNotHungry = "The cat is not hungry";
    const isLonely = "The cat is lonely";
    const isNotLonely = "The cat is not lonely";
    const isHappy = "The cat is happy";
    const isNotHappy = "The cat is not happy";

    if (this.tiredness > 20) {
      console.log(isTired);
    } else {
      console.log(isNotTired);
    }

    if (this.loneliness > 20) {
      console.log(isLonely);
    } else {
      console.log(isNotLonely);
    }

    if (this.hunger > 20) {
      console.log(isHungry);
    } else {
      console.log(isNotHungry);
    }

    if (this.happiness > 20) {
      console.log(isHappy);
    } else {
      console.log(isNotHappy);
    }
  }
}

const garfield = new Cat();
garfield.play(55, 34, 46, 59);
garfield.status();
