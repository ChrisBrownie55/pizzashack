const server = require('express')();
const bp = require('body-parser');

server.use(bp.json());
server.use(
  bp.urlencoded({
    extended: true
  })
);

const PORT = 8080;
server.listen(PORT, () => console.log(`Running on port: ${PORT}.`));
