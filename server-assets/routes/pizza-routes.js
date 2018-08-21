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
router.get('/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index === NaN || index >= pizzas.length || index < 0) {
    return res.status(400).send({
      error: 'Out of range'
    });
  }
  res.send(pizzas[index]);
});
