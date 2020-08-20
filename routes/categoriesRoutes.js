const express = require('express');
const categoriesRoutes = express.Router();

const categories = require('../lib/models/categories/categories.collection.js');

categoriesRoutes.post('/categories', (req, res, next) =>{
  categories.create(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
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