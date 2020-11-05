function Meal() {
  this.items = [].slice.call(arguments);
  this.isPaid = false;
}

Meal.prototype.addItem = function(item) {
  if (this.isPaid) {
    console.log('Sorry, you can\'t change your order after payment');
  } else {
    this.items.push(item);
    console.log(item.name + ' added to your order');
  }
}
  
Meal.prototype.removeItem = function(item) {
  if (this.isPaid) {
    console.log('Sorry, you can\'t change your order after payment');
  } else if (!this.items.length) {
    console.log('You don\'t have any items to remove');
  } else if (this.items.indexOf(item) === -1) {
    console.log('You don\'t have \"' + item.name + '\" in your order');
  } else {
    this.items.splice(this.items.indexOf(item), 1);
    console.log(item.name + ' removed from your order');
  }
}

Meal.prototype.show = function() {
  if (!this.items.length) {
    console.log('Your order is empty');
  } else {
    console.log('You ordered:\n' + this.items.map(function(item) { return item.name }).join('\n'));
  }
}

Meal.prototype.checkPayment = function() {
  if (!this.isPaid) {
    console.log('awaiting payment');
  } else {
    console.log('paid');
  }
}

Meal.prototype.completePayment = function() {
  if (!this.isPaid) {
    this.isPaid = true;
    Object.freeze(this);
    console.log('Payment successful :)');  
  } else {
    console.log('Oops... You have already paid for this ;)');
  }
}

Meal.prototype.getPrice = function() {
  if (!this.items.length) {
    console.log('Your order is empty');
  } else {
    var price = 0;
    this.items.forEach(function(item) {
      price += item.price;
    })
    console.log('Total price: ' + price + ' tugriks');
  }
}

Meal.prototype.getCalories = function() {
  if (!this.items.length) {
    console.log('Your order is empty');
  } else {
    var calories = 0;
    this.items.forEach(function(item) {
      calories += item.calories;
    })
    console.log('Total calories: ' + calories + 'cal');
  }
}

module.exports = Meal;
