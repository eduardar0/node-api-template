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
  res.send('Ok, deu certo!');
});

// Rota POST
app.post('/usuarios', (req, res) => {
  res.send('Usuário criado!');
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
