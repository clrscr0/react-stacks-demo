import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import itemRoutes from './routes/items';
import cors from 'cors';

const app = express();
const port = 3001;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use('/items', itemRoutes);

async function main() {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });