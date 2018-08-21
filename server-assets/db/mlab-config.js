const mongoose = require('mongoose');
const dbInfo = require('./dbinfo');
const connectionString =
  `mongodb://${dbInfo.username}:${dbInfo.password}@ds018558.mlab.com:18558/pizzashack';
