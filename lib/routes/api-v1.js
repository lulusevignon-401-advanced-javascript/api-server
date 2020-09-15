'use strict';

const express = require('express');
const router = express.Router();

const categories = require('../models/categories/categories.collection.js');
const products = require('../models/products/products.collection.js');

function getModel(req, res, next) {
  let model = req.params.model; 


  switch (model) {
  case 'categories':
    req.model = categories;
    next();
    return;
  case 'products':
    req.model = products;
    next();
    return;
  default:
    next('Invalid Model');
    return;
  }
}

router.param('model', getModel);


router.post('/:model', handlePostAll);
router.get('/:model', handleGetAll);
router.get('/:model/:id', handleGet);
router.put('/:model/:id', handlePut);
router.delete('/:model/:id', handleDelete);


function handlePostAll (req, res, next) {
  req.model.post(req.body)
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}

function handleGetAll (req, res, next) {
  req.model.get()
    .then(data => {
      let count = data.length;
      res.status(200).json({ count, data });
    }).catch(next);
}

function handleGet(req, res, next){
  let id = req.params.id;
  req.model.get(id)
    .then(data=>{
      res.status(200).json(data);
    }).catch(next);
}

function handlePut (req, res, next){
  let id = req.params.id;
  req.model.put(id)
    .then(data => {
      res.status(200).json(data);
    });
}

function handleDelete (req, res, next){
  let id = req.params.id;
  req.model.delete(id)
    .then(data => {
      res.status(200).json(data);
    });
}

module.exports = router;