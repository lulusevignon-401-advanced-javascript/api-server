'use strict';

const express = require('express');
require('dotenv').config();

const cors = require('cors');
const morgan = require('morgan');

const productsRoutes =  require('../routes/productsRoutes.js');
const categoriesRoutes =  require('../routes/categoriesRoutes.js');

const logger = require('../middleware/logger.js');
const timeStamp = require('../middleware/timestamp.js');
const fiveHundred = require('../middleware/500.js');
const fourOfour = require('../middleware/404.js'); 


const app = express();

app.use(morgan('dev'));
app.use(cors());

//Global middleware
app.use(express.json());
app.use(productsRoutes);
app.use(categoriesRoutes);
app.use(timeStamp);
app.use(logger);

app.use('/api/v1', productsRoutes);
app.use('/api/v1', categoriesRoutes);

app.use(fourOfour);
app.use(fiveHundred);

module.exports = {
  start: port =>{
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, ()=> console.log(`Listening on ${PORT}`));
  },
};
