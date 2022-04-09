import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (_request: Request, response: Response) => {
  response.json({ message: 'Hello World' });
});

export default router;
