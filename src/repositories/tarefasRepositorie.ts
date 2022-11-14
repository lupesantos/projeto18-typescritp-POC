import connection from '../postgres/postgres.js';
import { QueryResult } from 'pg';

type Task = {
	id?: number;
	name: string;
	descricao: string;
	dia: string | Date;
	responsavel: string;
	status?: string;
};

type Count = {
	Tarefas: string;
	responsavel: string;
};

async function insertTarefa({
	name,
	descricao,
	dia,
	responsavel,
}: Task): Promise<QueryResult> {
	return await connection.query(
		'INSERT INTO tarefas (name, descricao, dia, responsavel) VALUES ($1, $2, $3, $4);',
		[name, descricao, dia, responsavel]
	);
}

async function readTarefas(): Promise<QueryResult<Task>> {
	const tarefas = await connection.query('SELECT * FROM tarefas;');
	return tarefas;
}

async function updateTarefas(id: string, realizada: string) {
	await connection.query('UPDATE tarefas SET status= ($1) WHERE id = ($2);', [
		realizada,
		id,
	]);
}

async function countTarefas(): Promise<QueryResult<Count>> {
	const tarefascount = await connection.query(
		'SELECT COUNT(name) AS "Tarefas", responsavel FROM tarefas GROUP BY responsavel ORDER BY "Tarefas" desc;'
	);
	return tarefascount;
}

async function tarefasByPerson2(person: string): Promise<QueryResult<Task>> {
	const tarefasByPerson = await connection.query(
		'SELECT * FROM tarefas WHERE responsavel = $1;',
		[person]
	);
	return tarefasByPerson;
}

async function removeTarefas(id: string) {
	await connection.query('DELETE FROM tarefas WHERE id = $1', [id]);
}

export {
	insertTarefa,
	readTarefas,
	updateTarefas,
	countTarefas,
	removeTarefas,
	tarefasByPerson2,
};
