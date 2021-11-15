const express = require('express');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();


// Home page route.
router.get('/', function (req, res) {
    res.send('Wiki home page');
  })
  
  // About page route.
  router.get('/about', function (req, res) {
    res.send('About this wiki');
  })
  
  module.exports = router;
