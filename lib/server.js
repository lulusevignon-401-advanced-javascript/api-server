'use strict';

const express = require('express');
require('dotenv').config();

const cors = require('cors');
const morgan = require('morgan');

const router =  require('./routes/api-v1.js');


const logger = require('../middleware/logger.js');
const timeStamp = require('../middleware/timestamp.js');
const fiveHundred = require('../middleware/500.js');
const fourOfour = require('../middleware/404.js'); 


const app = express();

app.use(morgan('dev'));
app.use(cors());

//Global middleware
app.use(express.json());
app.use(router);
app.use(timeStamp);
app.use(logger);

app.use('/api/v1', router);


app.use(fourOfour);
app.use(fiveHundred);

module.exports = {
  start: port =>{
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, ()=> console.log(`Listening on ${PORT}`));
  },
};
