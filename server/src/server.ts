/* eslint-disable no-console */
import 'dotenv/config';

import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

import router from './router';

const { PORT } = process.env;

const app = express();

app.use(cors);
app.use(router);

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('User has connected');

  socket.on('join', ({ name, room }) => {
    console.log(name, room);
  });

  socket.on('disconnect', () => {
    console.log('User has disconnected');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
