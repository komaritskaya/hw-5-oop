var Burger = require('./components/burger');
var Salad = require('./components/salad');
var Drink = require('./components/drink');
var Meal = require('./components/meal');
var AbstractMealItem = require('./components/abstract-meal-item');

var firstBurger = new Burger(Burger.options.BIG, Burger.options.ADD_POTATO);
var secondBurger = new Burger(Burger.options.SMALL, Burger.options.ADD_CHEESE);
var thirdBurger = new Burger(Burger.options.SMALL, Burger.options.ADD_SALAD);

var firstSalad = new Salad(Salad.options.CAESAR, 100);
var secondSalad = new Salad(Salad.options.RUSSIAN, 200);

var firstDrink = new Drink(Drink.options.COKE);
var secondDrink = new Drink(Drink.options.COFFEE);

var meal = new Meal();

// var someItem = new AbstractMealItem(); // Error

console.log(firstBurger.getName()); // big burger with potato
console.log(firstBurger.getPrice()); // 115
console.log(firstBurger.getCalories()); // 50
console.log(firstBurger.getSize()); // big
console.log(firstBurger.getStuffing()); // potato
firstBurger.viewBurgerOptions(); // Your options are ...

console.log(firstSalad.getName()); // caesar salad, 100g
console.log(firstSalad.getPrice()); // 100
console.log(firstSalad.getCalories()); // 20
console.log(firstSalad.getPricePer100g()); // 100
console.log(firstSalad.getCaloriesPer100g()); // 20
console.log(firstSalad.getType()); // caesar
console.log(firstSalad.getWeight()); // 100
firstSalad.viewSaladOptions(); // Your options are ...

console.log(firstDrink.getName()); // coke
console.log(firstDrink.getPrice()); // 50
console.log(firstDrink.getCalories()); // 40
firstDrink.viewDrinkOptions(); // Your options are ...

meal.addItem(secondBurger); // ok
meal.removeItem(secondBurger); // ok
meal.removeItem(firstDrink); // Error
meal.addItem(thirdBurger); // ok
meal.removeItem(firstSalad); // Error
meal.addItem(secondSalad); // ok
meal.addItem(secondDrink); // ok
meal.show(); // You ordered ...
meal.getPrice(); // Total price ...
meal.getCalories(); // Total calories ...
meal.checkPayment(); // awaiting payment
meal.completePayment(); // ok
meal.checkPayment(); // paid
meal.addItem(secondBurger); // Error
meal.removeItem(secondBurger); // Error
