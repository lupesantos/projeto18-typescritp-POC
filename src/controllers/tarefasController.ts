import connection from '../postgres/postgres.js';
import { tarefasSchema } from '../schemas/tarefasSchema.js';
import { Request, Response } from 'express';
import {
	insertTarefa,
	readTarefas,
	updateTarefas,
	countTarefas,
	removeTarefas,
	tarefasByPerson2,
} from '../repositories/tarefasRepositorie.js';

const postTarefas = async (req: Request, res: Response) => {
	const { name, descricao, dia, responsavel } = req.body;

	const { error } = tarefasSchema.validate({
		name,
		descricao,
		dia,
		responsavel,
	});

	if (error) {
		return res.status(400).send({
			message: error.message,
		});
	}

	try {
		insertTarefa({ name, descricao, dia, responsavel });
		res.sendStatus(201);
	} catch (error) {
		console.log(error);
	}
};

const getTarefas = async (req: Request, res: Response) => {
	try {
		const tarefas = await readTarefas();
		res.send(tarefas.rows).status(200);
	} catch (error) {
		console.log(error);
	}
};

const doneTarefa = async (req: Request, res: Response) => {
	const { id } = req.params;
	const realizada: string = 'realizada';
	console.log(id);
	try {
		await updateTarefas(id, realizada);
		res.sendStatus(200);
	} catch (error) {
		console.log(error);
	}
};

const getTarefasCountByPerson = async (req: Request, res: Response) => {
	try {
		const tarefascount = await countTarefas();
		res.send(tarefascount.rows).status(200);
	} catch (error) {
		console.log(error);
	}
};

const getTarefasByPerson = async (req: Request, res: Response) => {
	const { person } = req.params;
	console.log(person);
	console.log('entrou');
	try {
		const tarefasByPerson = await tarefasByPerson2(person);
		res.send(tarefasByPerson.rows).status(200);
	} catch (error) {
		console.log(error);
	}
};

const deleteTarefas = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		await removeTarefas(id);
		res.sendStatus(200);
	} catch (error) {
		console.log(error);
	}
};
export {
	postTarefas,
	getTarefas,
	doneTarefa,
	getTarefasCountByPerson,
	deleteTarefas,
	getTarefasByPerson,
};
