import express from 'express';

import { startConsumer } from './infra/kafka';

const app = express();

async function run() {
  startConsumer().then(() => {
    console.log('Kafka is runing ⚡️');
  });

  app.listen(process.env.PORT || 4000, () => {
    console.log('Company is running now 🔥');
  });
}

run().catch(console.error);

// app.post('/', (request, response) => {
//   response.json({
//     ok: true,
//   });
// });
