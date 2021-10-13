import express from 'express';

import './database';

import { startConsumer } from './kafka';

const app = express();

app.get('/', (request, response) => {
  response.json({
    ok: true,
  });
});

async function run() {
  startConsumer().then(() => {
    console.log('Kafka is runing ⚡️');
  });

  app.listen(process.env.PORT || 4000, () => {
    console.log('Company is running now 🔥');
  });
}

run().catch(console.error);
