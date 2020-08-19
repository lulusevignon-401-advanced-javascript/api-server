const express = require('express');
require('dotenv').config();
const app = express();

const router =  require('./routes.js');
const logger = require('../middleware/logger.js');
const timeStamp = require('../middleware/timestamp.js');
const fiveHundred = require('../middleware/500.jd');
const fourOfour = require('../middleware/404.js'); 

//Global middleware
app.use(express.json());
app.use(router);
app.use(timeStamp);
app.use(logger);
app.use(fourOfour);
app.use(fiveHundred);


module.exports = {
  start: port =>{
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, ()=> console.log(`Listening on ${PORT}`));
  },
};
