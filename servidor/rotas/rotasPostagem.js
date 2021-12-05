import express from 'express';

const roteador = express.Router();

import postagem from '../servicos/postagem';

roteador.get('/postagens', async (requisicao, resposta) => {
  const retorno = await postagem.obterPostagens();
  resposta.json(retorno);
});
roteador.get('/postagens/:id', async (requisicao, resposta) => {

});
roteador.post('/postagens', async (requisicao, resposta) => {

});
roteador.put('/postagens/:id', async (requisicao, resposta) => {

});
roteador.delete('/postagens/:id', async (requisicao, resposta) => {

});

export default roteador;
