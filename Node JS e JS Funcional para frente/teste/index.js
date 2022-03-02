const express = require('express')//chamando o pacote express
const app = express() //variavel pra armazenar a aplicação

app.get('/', function(req, res){//esta criando a rota de resposta ao solicitar ua página principal http://localhost:3000/
    res.send("Hello Word my friends")
})

app.listen(3000)//esta lendo a porta 3000
