// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const app = express();


// const main = async () => await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

// main();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
import express from 'express';
// rest of the code remains same
const app = express();
const PORT = 8000;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
