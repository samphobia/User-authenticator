import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

import connectDB from './db/connect.js';

import authroute from './routes/authRoute.js';

import morgan from 'morgan';
if(process.env.NODE_ENV === 'production') {
  app.use(morgan('dev'));
}

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/api/v1', (req, res) => {
  res.json({msg: 'Here'});
})

app.use('/api/v1/auth', authroute);

const port = process.env.PORT || 5003;

const start = async () => {
  await connectDB(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  })
}

start()