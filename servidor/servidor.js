import express from "express";

import padrao from './rotas/rotaPadrao';
import postagens from './rotas/rotasPostagem';

const app = express();

app.use(express.json());

app.use('/', padrao);
app.use('/postagem/v1', postagens);

app.use((erro, requisicao, resposta, proximo) => {
  if (erro.message === 'Postagem já cadastrada') {
    resposta.status(409).send(erro.message);
  }

  if (erro.message === 'Postagem não encontrada') {
    resposta.status(404).send(erro.message);
  }

  resposta.status(500).send(erro.message);
});

app.listen(3000);
