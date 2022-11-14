import { Router } from 'express';
import {
	postTarefas,
	getTarefas,
	doneTarefa,
	getTarefasCountByPerson,
	getTarefasByPerson,
	deleteTarefas,
} from '../controllers/tarefasController.js';

const tarefasRouter = Router();

tarefasRouter.post('/tarefas', postTarefas);
tarefasRouter.get('/tarefas', getTarefas);
tarefasRouter.get('/tarefas/count', getTarefasCountByPerson);
tarefasRouter.get('/tarefas/:person', getTarefasByPerson);
tarefasRouter.put('/tarefas/done/:id', doneTarefa);
tarefasRouter.delete('/tarefas/:id', deleteTarefas);

export default tarefasRouter;
