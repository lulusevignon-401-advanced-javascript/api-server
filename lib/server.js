const express = require('express');
require('dotenv').config();


const router =  require('../routes/routes.js'); // change to productsRoutes
// const categoriesRoutes = require...

const logger = require('../middleware/logger.js');
const timeStamp = require('../middleware/timestamp.js');
const fiveHundred = require('../middleware/500.js');
const fourOfour = require('../middleware/404.js'); 


const app = express();

//Global middleware
app.use(express.json());
app.use(router);
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
