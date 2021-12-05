import express from 'express';

const roteador = express.Router();

import servicoPostagem from '../servicos/postagem';

roteador.get('/postagens', async (requisicao, resposta) => {
  const retorno = await servicoPostagem.obterPostagens();
  resposta.json(retorno);
});

roteador.get('/postagens/:id', async (requisicao, resposta) => {

});

roteador.post('/postagens', async (requisicao, resposta) => {
  const { titulo, conteudo } = requisicao.body;
  const retorno = await servicoPostagem.inserirPostagem({
    titulo,
    conteudo
  });
  resposta.json(retorno);
});

roteador.put('/postagens/:id', async (requisicao, resposta) => {
  const { id } = requisicao.params;
  const { titulo, conteudo } = requisicao.body;
  const retorno = await servicoPostagem.alterarPostagem({
    id,
    titulo,
    conteudo
  });
  resposta.json(retorno);
});

roteador.delete('/postagens/:id', async (requisicao, resposta) => {
  const { id } = requisicao.params;
  const retorno = await servicoPostagem.removerPostagem(id);
  resposta.json(retorno);
});

export default roteador;
