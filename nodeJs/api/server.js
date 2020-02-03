const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');


//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());
//sempre instalar nodemon para ouvir as mudanças(nodemon -d)
//req e as informaçoes da requisição do navegador
//res e a nossa resposta// resposta do servidor

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

requireDir('./src/models');

//rotas
app.use('/api', require('./src/routes'));


app.listen(3001);