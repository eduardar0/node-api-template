import express from 'express';

const app = express(); // instancia o servidor express


// Habilita o uso de JSON no body das requisições
app.use(express.json());

/* Métodos HTTP:
   GET    - Buscar informações
   POST   - Criar algo novo
   PUT    - Atualizar algo (tudo)
   PATCH  - Atualizar algo (parcial)
   DELETE - Deletar algo
*/

// Rota GET
app.get('/usuarios', (req, res) => {

  res.json(users);
  res.status(200).json(users)
});

// Rota POST

app.post('/usuarios', (req, res) => {

  const newUser = req.body; // pega o que veio no body
  users.push(newUser);      // adiciona no array
  res.status(201).send('Usuário criado com sucesso!');

});

// Rota PUT
app.put('/usuarios', (req, res) => {
  res.send('Usuário atualizado!');
});

// Rota DELETE
app.delete('/usuarios', (req, res) => {
  res.send('Usuário deletado!');
});

// Inicializa o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});


/*
criar nossa API de usuários
CRUD 
-listar os usuários 
-Criar um usuário 
-editar 
-deletar 


*/

const users = []

/*
query parms 
coloca as variávveis na url
localhost:3000/usuarios?cidade=salvador&usuario=leandra
*/

/*
Route Parms 
buscar, deletar ou editar algo especifico 
ex: http://localhost:3000/usuarios/22 

*/

/*
Body parms: 
json 
{
"nome": "Rodolfo", "id": 22....

}

 */

/*

front end se cominica com back por meio de codiogso, 
codigos que começam com 2xxx... DEU CERTO
4xx- erro cliente 
5xx - erro servidor 

 */