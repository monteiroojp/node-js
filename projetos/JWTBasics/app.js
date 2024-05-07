require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
app.use(express.json());
const errorHandlerMiddleware = require('./middleware/error-handler');

//Router
const router = require('./routes/main.js')
app.use('/api/v1', router)

// middleware
app.use(express.static('projetos/JWTBasics/public'));
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const port = process.env.PORT || 3000;


const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
