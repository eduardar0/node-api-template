import express from 'express'

const app = express() //pega o express e passa como função

//como se fosse a st do python com streamlit 

/*Metodos HTTP 

Get: Listar 
post: criar 
delete: deletar
put: editar vários
patch: editar UM 


Metodos para criação de rotas e expecifação doq cara rota vai fazer 

*/

app.get('/usuarios', (req, res)=>{
    app.send()
})
app.post('/usuarios')
app.put('/usuarios')
app.delete('/usuarios')

/*
1) Tipo de rota/Metodo HTTP
2)Endereço, ex: lojadaDuda.com/usuarios

*/