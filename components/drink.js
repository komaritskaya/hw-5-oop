var AbstractMealItem = require('./abstract-meal-item');
var DrinkOptions = require('../constants').DrinkOptions;

function Drink(type) {
  AbstractMealItem.call(this, type);
}

Drink.prototype = Object.create(AbstractMealItem.prototype);
Drink.prototype.constructor = Drink;

Drink.options = DrinkOptions;
Drink.prototype.viewDrinkOptions = function () {
  this.viewOptions(DrinkOptions);
}

module.exports = Drink;