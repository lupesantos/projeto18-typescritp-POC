import express from 'express';
import tarefasRouter from './routers/tarefasRouter.js';
//import cors from 'cors';
var server = express();
//server.use(cors());
server.use(express.json());
server.use(tarefasRouter);
server.get('/health', function (req, res) {
    res.send('ok!');
});
server.listen(4000, function () {
    console.log('ta executando...');
});
