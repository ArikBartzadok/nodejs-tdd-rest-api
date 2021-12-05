import express from "express";

import padrao from './rotas/rotaPadrao';
import postagens from './rotas/rotasPostagem';

const app = express();

app.use('/', padrao);
app.use('/postagem/v1', postagens);

app.listen(3000);
