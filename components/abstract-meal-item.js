function AbstractMealItem(name, price, calories) {
  if (new.target === AbstractMealItem) { 
    throw new Error(`Can't instantiate abstract item, only specific one.`);
  }

  this.name = name || 'Unknown item';
  this.price = price || 0;
  this.calories = calories || 0;
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

// AbstractMealItem.prototype.viewOptions = function () {
//   if (!this.options || !Object.keys(this.options)) {
//     console.log('Sorry, no options left on this item');
//     return;
//   }
//   var optionsString = Object.values(this.options).map(function(option) {
//     return option.name + ': ' + option.price + 'mnt / ' + option.calories + 'cal';
//   }).join('\n');
//   console.log('Your options are:\n' + optionsString);
// };

module.exports = AbstractMealItem;