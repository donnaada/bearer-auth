'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 4002;

// Start up DB Server
const { db } = require('./src/auth/models/index.js');

db.sync()
  .then(() => {
    // Start the web server
    require('./src/server.js').startup(PORT);
  });

