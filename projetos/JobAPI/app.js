require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const authenticateToken = require('./middleware/authentication')

//extra security packs
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

const authrouter = require('./routes/auth')
const jobRouter = require('./routes/jobs')


//ConnectDb
const connectDB = require('./db/connect')
app.use(express.json());

//Security
app.set('trust proxy', 1)
app.use(helmet())
app.use(cors())
app.use(xss())
app.use(rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 100
}))

//Routers
app.use('/api/v1/auth', authrouter)
app.use('/api/v1/jobs', authenticateToken ,jobRouter)

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
