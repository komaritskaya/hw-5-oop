var AbstractMealItem = require('./abstract-meal-item');
var BurgerOptions = require('../constants').BurgerOptions;

function Burger(size, stuffing) {
  AbstractMealItem.call(this);
  this.name = size.name + ' burger with ' + stuffing.name;
  this.price = size.price + stuffing.price;
  this.calories = size.calories + stuffing.calories;
  this.size = size;
  this.stuffing = stuffing;
}

Burger.prototype = Object.create(AbstractMealItem.prototype);
Burger.prototype.constructor = Burger;

Burger.prototype.getSize = function () {
  return this.size.name;
};
Burger.prototype.getStuffing = function () {
  return this.stuffing.name;
};

Burger.options = BurgerOptions;
Burger.prototype.viewBurgerOptions = function () {
  this.viewOptions(BurgerOptions);
}

module.exports = Burger;
