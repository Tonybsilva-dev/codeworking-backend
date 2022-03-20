import { createConnection } from 'typeorm';

const port = 5432

createConnection().then(
  () => console.log(`✅ Database connected on port ${port}!`)
);