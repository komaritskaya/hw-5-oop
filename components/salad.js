var AbstractMealItem = require('./abstract-meal-item');
var SaladOptions = require('../constants').SaladOptions;

function Salad(type, weight) {
  AbstractMealItem.call(this, type);
  this.name = type.name + ' salad, ' + weight.toString() + 'g';
  this.price = type.price / 100 * weight;
  this.calories = type.calories / 100 * weight;
  this.type = type;
  this.weight = weight;
}

Salad.prototype = Object.create(AbstractMealItem.prototype);
Salad.prototype.constructor = Salad;

Salad.prototype.getWeight = function () {
  return this.weight;
};
Salad.prototype.getType = function () {
  return this.type.name;
};
Salad.prototype.getPricePer100g = function () {
  return this.type.price;
};
Salad.prototype.getCaloriesPer100g = function () {
  return this.type.calories;
};

Salad.options = SaladOptions;
Salad.prototype.viewSaladOptions = function () {
  this.viewOptions(SaladOptions);
}

module.exports = Salad;
