var BurgerOptions = {
  SMALL: {
    name: 'small',
    price: 50,
    calories: 20,
  },
  BIG: {
    name: 'big',
    price: 100,
    calories: 40,
  },
  ADD_CHEESE: {
    name: 'cheese',
    price: 10,
    calories: 20,
  },
  ADD_SALAD: {
    name: 'salad',
    price: 20,
    calories: 5
  },
  ADD_POTATO: {
    name: 'potato',
    price: 15,
    calories: 10,
  }
};

var SaladOptions = {
  CAESAR: {
    name: 'caesar',
    price: 100,
    calories: 20,
  },
  RUSSIAN: {
    name: 'russian',
    price: 50,
    calories: 80,
  },
};

var DrinkOptions = {
  COKE: {
    name: 'coke',
    price: 50,
    calories: 40,
  },
  COFFEE: {
    name: 'coffee',
    price: 80,
    calories: 20,
  },
};

module.exports = {
  BurgerOptions: BurgerOptions,
  SaladOptions: SaladOptions,
  DrinkOptions: DrinkOptions,
};
