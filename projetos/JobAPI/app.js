require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();


const authrouter = require('./routes/auth')
const jobRouter = require('./routes/jobs')


//ConnectDb
const connectDB = require('./db/connect')
app.use(express.json());

//Routers
app.use('/api/v1/auth', authrouter)
app.use('/api/v1/jobs', jobRouter)

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


// extra packages

// routes
app.get('/', (req, res) => {
  res.send('jobs api');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();