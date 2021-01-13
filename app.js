const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const db = require('./db');

const api = require('./routes/index');

// pre-route middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', api);

// Listen app
const PORT = process.env.APP_PORT;

app.listen(PORT || 8000, () => {
  console.log(`Server running on port: ${PORT}`);
});
