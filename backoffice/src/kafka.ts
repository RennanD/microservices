import { Kafka, KafkaConfig } from 'kafkajs';

const config: KafkaConfig = {
  clientId: 'backoffice',
  brokers: ['localhost:9092'],
  retry: {
    initialRetryTime: 300,
    retries: 8,
  },
};

const kafka = new Kafka(config);

export { kafka };
