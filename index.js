const server = require('express')();
const bp = require('body-parser');

server.use(bp.json());
server.use(
  bp.urlencoded({
    extended: true
  })
);

// Routes
const routes = {
  pizza: require('./server-assets/routes/pizza-routes')
};

server.use('/pizza', routes.pizza);

const PORT = 8080;
server.listen(PORT, () => console.log(`Running on port: ${PORT}.`));
