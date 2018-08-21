const mongoose = require('mongoose');
const { connection } = mongoose;
const dbInfo = require('./dbinfo');
const connectionString = `mongodb://${dbInfo.username}:${
  dbInfo.password
}@ds018558.mlab.com:18558/pizzashack`;

mongoose.connect(connectionString);

connection.once('open', () => console.log('Connected to database'));
connection.on('error', error => console.error(error));
