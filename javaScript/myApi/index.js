const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 80;

app.use(bodyParser.json());

// Rota GET
app.get('/api/ping', (req, res) => {
    res.json({ message: 'pong' });
});

app.post('/api/usuario/criar', (req, res) => {
    res.json({ message: 'usuario criado com sucesso' });
})

// Inicia o servidor
app.listen(PORT, () => { 
    console.log('Servidor em execução')
})