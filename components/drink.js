var AbstractMealItem = require('./abstract-meal-item');
var DrinkOptions = require('../constants').DrinkOptions;

function Drink(drink) {
  AbstractMealItem.call(this, drink);
  this.name = drink.name;
  this.price = drink.price;
  this.calories = drink.calories;
}

Drink.prototype = Object.create(AbstractMealItem.prototype);
Drink.prototype.constructor = Drink;

Drink.options = DrinkOptions;
Drink.prototype.viewDrinkOptions = function () {
  this.viewOptions(DrinkOptions);
}

module.exports = Drink;