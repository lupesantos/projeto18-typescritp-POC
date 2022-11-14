import { Router } from 'express';
import { postTarefas, getTarefas } from '../controllers/tarefasController.js';
var tarefasRouter = Router();
tarefasRouter.post('/tarefas', postTarefas);
tarefasRouter.get('/tarefas', getTarefas);
export default tarefasRouter;
