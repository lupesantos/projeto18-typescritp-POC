### Organizador de tarefas de uma república

## ROTAS

# INSERIR NOVA TAREFA
POST: /tarefas
Body: { 
        "name": "arrumar a casa", 
        "descricao": "deixar tudo bem limpinho",
        "dia": "11/16/2022",
        "responsavel": "bad lele"
      }

# LER TODAS AS TAREFAS
GET: /tarefas 

# LER NUMERO DE TAREFAS POR PESSOA
GET: /tarefas/count

# LER TAREFAS DE UM DETERMINADO MORADOR
GET: /tarefas/:person

# ATUALIZAR UMA TAREFA APÓS REALIZA-LA
PUT: /tarefas/done/:id

# DELETAR UMA TAREFA
DELETE: /tarefas/:id
