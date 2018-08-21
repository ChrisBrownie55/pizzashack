const router = require('express').Router();
const Pizza = require('../models/Pizza');

async function getAllPizzas(res) {
  const pizzas = await Pizza.find({});
  return res.send(pizzas);
}

async function getPizzaById(res, id) {
  const pizza = await Pizza.findById(id);

  console.log(pizza);
  if (!pizza) {
    return res.status(400).send({ error: 'Pizza with that id does not exist' });
  }

  return res.send(pizza);
}

async function createPizza(res, pizzaObj) {
  const pizza = await Pizza.create(pizzaObj);
  if (pizza.error) {
    return res.status(400).send(pizza.error);
  }

  return res.send(pizza);
}

async function removePizzaById(res, id) {
  const deletedPizza = await Pizza.findByIdAndRemove(id);

  console.log(deletedPizza);
  if (!deletedPizza) {
    return res.status(400).send({ error: 'Pizza with that id does not exist' });
  }

  return res.send(deletedPizza);
}

async function modifyPizza(res, id, modifiedObject) {
  const newPizza = await Pizza.findByIdAndUpdate(id, modifiedObject, {
    new: true
  });

  console.log(newPizza);
  if (!newPizza) {
    return res.status(400).send({ error: 'Pizza with that id does not exist' });
  }

  return res.send(newPizza);
}

router.get('/:id?', (req, res) => {
  if (!req.params.id) {
    return getAllPizzas(res);
  }

  getPizzaById(res, req.params.id);
});

router.post('/', async (req, res) => createPizza(res, req.body));

router.delete('/:id', (req, res) => modifyPizza(res, req.params.id, req.body));

module.exports = router;
