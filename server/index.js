const express = require('express');
const userController = require('./controllers/userController');
const cors = require("cors")
require('./db');

const PORT = 5000;

const app = express();

app.use(express.json());

app.use(cors())

app.use('/api', userController);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});