const server = require('express')();
const bp = require('body-parser');
const cors = require('cors');

server.use(cors());
server.use(bp.json());
server.use(
  bp.urlencoded({
    extended: true
  })
);

// Database
require('./server-assets/db/mlab-config');

// Routes
const routes = {
  pizza: require('./server-assets/routes/pizza-routes')
};

server.use('/pizza', routes.pizza);

const PORT = 8080;
server.listen(PORT, () => console.log(`Running on port: ${PORT}.`));
