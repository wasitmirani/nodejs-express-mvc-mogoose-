const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


const main = async () => await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

main();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
