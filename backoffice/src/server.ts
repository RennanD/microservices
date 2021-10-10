import 'reflect-metadata';
import express from 'express';

import cors from 'cors';

import createConnection from './database';

import { routes } from './routes';

createConnection();
const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('Server running 🚀');
});
