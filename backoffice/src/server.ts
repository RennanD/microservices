import 'reflect-metadata';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';

import cors from 'cors';

import createConnection from './database';

import { handleException } from './middlewares/handleException';
import { routes } from './routes';

import { kafka } from './kafka';

createConnection();
const app = express();

const producer = kafka.producer();

app.use(express.json());
app.use(cors());

app.use((request: Request, response: Response, next: NextFunction) => {
  request.producer = producer;

  next();
});

app.use(routes);
app.use(handleException);

async function run() {
  producer.connect().then(() => {
    console.log('Kafka Producer is runing 🧲');
  });

  app.listen(process.env.PORT || 3333, () => {
    console.log('Server running 🚀');
  });
}

run();
