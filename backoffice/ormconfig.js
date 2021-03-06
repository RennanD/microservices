module.exports = {
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'backoffice_db',
  migrations: ['./src/database/migrations/*.ts'],
  entities: ['./src/entities/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};
