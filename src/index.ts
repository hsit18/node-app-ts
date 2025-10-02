import express, { Request, Response } from 'express';
import { main } from './utils/Security';
import morgan from 'morgan';
import graphqlConfig from './config/graphql';
import prisma from './config/prismaClient';

const app = express();
const PORT = 3000;

main();

app.use(morgan('common'));

app.use('/graphql', graphqlConfig);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});