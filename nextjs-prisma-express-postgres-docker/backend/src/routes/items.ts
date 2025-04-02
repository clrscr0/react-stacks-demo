import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req: Request, res: Response) => {
  try {
    const items = await prisma.item.findMany();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch items' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const newItem = await prisma.item.create({
      data: req.body,
    });
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create item' });
  }
});

export default router;