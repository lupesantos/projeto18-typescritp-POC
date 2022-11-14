import Joi from 'joi';

export const tarefasSchema = Joi.object({
	name: Joi.string().required(),
	descricao: Joi.string().required(),
	dia: Joi.date() || Joi.string(),
	responsavel: Joi.string().required(),
});
