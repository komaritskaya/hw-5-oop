var AbstractMealItem = require('./abstract-meal-item');
var BurgerOptions = require('../constants').BurgerOptions;

function Burger(size, stuffing) {
  this.size = new AbstractMealItem(size);
  this.stuffing = new AbstractMealItem(stuffing);
  this.name = `${this.size.name} with ${this.stuffing.name}`;
  this.price = this.size.price + this.stuffing.price;
  this.calories = this.size.calories + this.stuffing.calories;
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
