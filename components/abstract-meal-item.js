function AbstractMealItem(type) {
  this.name = type.name || 'Unknown item';
  this.price = type.price || 0;
  this.calories = type.calories || 0;
}

AbstractMealItem.prototype.getName = function() {
  return this.name;
}

AbstractMealItem.prototype.getPrice = function() {
  return this.price;
}

AbstractMealItem.prototype.getCalories = function() {
  return this.calories;
}

AbstractMealItem.prototype.viewOptions = function (options) {
  if (!options || !Object.keys(options)) {
    console.log('Sorry, no options left on this item');
    return;
  }
  var optionsString = Object.values(options).map(function(option) {
    return option.name + ': ' + option.price + 'mnt / ' + option.calories + 'cal';
  }).join('\n');
  console.log('Your options are:\n' + optionsString);
};

module.exports = AbstractMealItem;