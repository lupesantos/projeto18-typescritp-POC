## Organizador de tarefas de uma república

## ROTAS

##### Inserir nova tarefa
POST: /tarefas
Body: { 
        "name": "arrumar a casa", 
        "descricao": "deixar tudo bem limpinho",
        "dia": "11/16/2022",
        "responsavel": "bad lele"
      }

##### Ler todas as tarefas
GET: /tarefas 

##### Ler número de tarefas por pessoa
GET: /tarefas/count

##### Ler tarefas de um determinado morador
GET: /tarefas/:person

##### Atualizar uma tarefa após realizá-la
PUT: /tarefas/done/:id

##### Deletar uma tarefa
DELETE: /tarefas/:id
