var AbstractMealItem = require('./abstract-meal-item');
var SaladOptions = require('../constants').SaladOptions;

function Salad(type, weight) {
  AbstractMealItem.call(this, type);
  this.weight = weight;
  this.name = `${this.name} ${this.weight}g`;
  this.price *= weight / 100;
  this.calories *= weight / 100;
}

Salad.prototype = Object.create(AbstractMealItem.prototype);
Salad.prototype.constructor = Salad;

Salad.prototype.getWeight = function () {
  return this.weight;
};

Salad.options = SaladOptions;
Salad.prototype.viewSaladOptions = function () {
  this.viewOptions(SaladOptions);
}

module.exports = Salad;
