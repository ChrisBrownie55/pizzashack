const router = require('express').Router();
const Pizza = require('../models/Pizza');

async function getAllPizzas(res) {
  try {
    const pizzas = await Pizza.find({});
    return res.send(pizzas);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function getPizzaById(res, id) {
  try {
    const pizza = await Pizza.findById(id);
    return res.send(pizza);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function createPizza(res, pizzaObj) {
  try {
    const pizza = await Pizza.create(pizzaObj);
    return res.send(pizza);
  } catch (error) {
    return res.status(400).send(error);
  }
}

async function removePizzaById(res, id) {
  try {
    const deletedPizza = await Pizza.findByIdAndRemove(id);
    return res.send(deletedPizza);
  } catch (error) {
    return res.status(400).send(error);
  }
}

async function modifyPizza(res, id, modifiedObject) {
  try {
    const newPizza = await Pizza.findByIdAndUpdate(id, modifiedObject, {
      new: true
    });
    return res.send(newPizza);
  } catch (error) {
    return res.status(400).send(error);
  }
}

// Routes
router.get('/:id?', (req, res) => {
  if (!req.params.id) {
    return getAllPizzas(res);
  }
  getPizzaById(res, req.params.id);
});
router.post('/', (req, res) => createPizza(res, req.body));
router.put('/:id', (req, res) => modifyPizza(res, req.params.id, req.body));
router.delete('/:id', (req, res) => removePizzaById(res, req.params.id));

module.exports = router;
