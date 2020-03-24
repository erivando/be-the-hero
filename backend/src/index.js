//cria uma variavel para a rota
const express = require('express');

const cors = require('cors');

const routes = require('./routes');

//extende a rota
const app = express();

app.use(cors);
//informar que as informações utilizadas serão do tipo json
app.use(express.json());

app.use(routes);

//exibe o localhost na porta 3333
app.listen(3333);