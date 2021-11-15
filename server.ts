


import express from 'express';

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./routes/api');
// rest of the code remains same
const app = express();
const PORT = 5000;
const main = async () => await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
main();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',userRouter);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
