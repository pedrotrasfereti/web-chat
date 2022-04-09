import express from 'express';
import 'dotenv/config';

const { PORT } = process.env;
const app = express();

app.get('/', (_request, response) => response.json({ message: 'Hello World' }));

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
