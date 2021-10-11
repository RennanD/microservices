import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';

import cors from 'cors';

import createConnection from './database';

import { handleException } from './middlewares/handleException';
import { routes } from './routes';

createConnection();
const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);
app.use(handleException);

app.listen(process.env.PORT || 3333, () => {
  console.log('Server running 🚀');
});
