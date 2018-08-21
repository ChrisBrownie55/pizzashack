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

router.get('/:index?', (req, res) => {
  if (!req.params.index) {
    res.send(pizzas);
  }

  const index = parseInt(req.params.index);
  if (index === NaN || index >= pizzas.length || index < 0) {
    return res.status(416).send({
      error: 'Out of range'
    });
  }
  res.send(pizzas[index]);
});

router.post('/', (req, res) => {
  pizzas.push(req.body);
  res.send(pizzas);
});

module.exports = router;
