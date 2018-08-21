const router = require('express').Router();

const pizzas = [
  {
    name: `Marks Sweet n' Spicy`,
    toppings: 'Pineapple, Jalapeño'
  },
  {
    name: 'Jakes boring pizza',
    toppings: `Cheese... that's it`
  },
  {
    name: 'D$ delight',
    toppings: 'All the meats'
  }
];

router.get('/', (_, res) => res.send(pizzas));
