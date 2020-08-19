const express = require('express');
const router = express.Router();


// const schema = ['id', 'name', 'title', 'author', 'article'];
// let db = [];

// products routes
router.post('/products', (req, res) =>{

});

router.get('/products', (req, res) =>{

});

router.get('/products/:id', (req, res) =>{

});

router.put('/products/:id', (req, res) =>{

});

router.delete('/products/:id', (req, res) =>{

});


// categories routes
router.post('/categories', (req, res) =>{

});

router.get('/categories', (req, res) => {
  let output = {
    type: req.query.type || 'unknown',
  };
  res.status(200).json(output);
});

router.get('/categories/:id', (req, res) =>{

});

router.put('/categories/:id', (req, res) =>{

});

router.delete('/categories/:id', (req, res) =>{

});

module.exports = router;