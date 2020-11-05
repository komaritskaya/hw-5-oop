var AbstractMealItem = require('./abstract-meal-item');
var DrinkOptions = require('../constants').DrinkOptions;

function Drink(drink) {
  AbstractMealItem.call(this, drink);
  this.name = drink.name;
  this.price = drink.price;
  this.calories = drink.calories;
}

Drink.options = DrinkOptions;

Drink.prototype = Object.create(AbstractMealItem.prototype);
Drink.prototype.constructor = Drink;

module.exports = Drink;