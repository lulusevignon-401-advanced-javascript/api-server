const express = require('express');
const categoriesRoutes = express.Router();


categoriesRoutes.post('/categories', (req, res) =>{

});

categoriesRoutes.get('/categories', (req, res) => {
  let output = {
    type: req.query.type || 'unknown',
  };
  res.status(200).json(output);
});

categoriesRoutes.get('/categories/:id', (req, res) =>{

});

categoriesRoutes.put('/categories/:id', (req, res) =>{

});

categoriesRoutes.delete('/categories/:id', (req, res) =>{

});

module.exports = categoriesRoutes;