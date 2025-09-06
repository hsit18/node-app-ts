import express, { Request, Response } from 'express';
import { main } from './utils/Security';

const app = express();
const PORT = 3000;

main();
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
