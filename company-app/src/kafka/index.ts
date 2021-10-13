import { Kafka, KafkaConfig } from 'kafkajs';
import { adaptKafkaHandler } from './adapters/MessageAdapter';
import { makeEnableCompanyModules } from './factories/MakeEnableCompanyModules';

const config: KafkaConfig = {
  clientId: 'company-app-id',
  brokers: ['localhost:9092'],
};

const kafka = new Kafka(config);

const consumer = kafka.consumer({
  groupId: 'company-app-consumer',
});

const topics = ['company-app.enable-modules'] as const;

type Topic = typeof topics[number];

const enableCompanyModules = adaptKafkaHandler(makeEnableCompanyModules());

export async function startConsumer(): Promise<void> {
  await consumer.connect();

  await Promise.all(
    topics.map(topic => {
      return consumer.subscribe({ topic });
    }),
  );

  await consumer.run({
    async eachMessage({ topic, message }) {
      try {
        switch (topic as Topic) {
          case 'company-app.enable-modules':
            await enableCompanyModules(message);
            break;
          default:
            break;
        }
      } catch (error) {
        console.log(`Erro para a mensagem: ${message.value?.toString()}`);
        console.log(error);
      }
    },
  });
}
