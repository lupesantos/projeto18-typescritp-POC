import express from 'express';
import tarefasRouter from './routers/tarefasRouter.js';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

server.use(tarefasRouter);

server.get('/health', (req, res) => {
	res.send('ok!');
});

server.listen(4000, () => {
	console.log('ta executando................');
});
