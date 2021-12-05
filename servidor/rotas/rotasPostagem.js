import express from 'express';
import { next } from 'sucrase/dist/parser/tokenizer';

const roteador = express.Router();

import servicoPostagem from '../servicos/postagem';

roteador.get('/postagens', async (requisicao, resposta, proximo) => {
  try {
    const retorno = await servicoPostagem.obterPostagens();
    resposta.json(retorno);
  } catch (e) {
    proximo(e);
  }
});

roteador.get('/postagens/:id', async (requisicao, resposta, proximo) => {});

roteador.post('/postagens', async (requisicao, resposta, proximo) => {
  const { titulo, conteudo } = requisicao.body;
  try {
    const retorno = await servicoPostagem.inserirPostagem({
      titulo,
      conteudo
    });
    resposta.status(201).json(retorno);
  } catch (e) {
    proximo(e);
  }
});

roteador.put('/postagens/:id', async (requisicao, resposta, proximo) => {
  const { id } = requisicao.params;
  const { titulo, conteudo } = requisicao.body;
  try {
    const retorno = await servicoPostagem.alterarPostagem({
      id,
      titulo,
      conteudo
    });
    resposta.status(204).json(retorno);
  } catch (e) {
    proximo(e);
  }
});

roteador.delete('/postagens/:id', async (requisicao, resposta, proximo) => {
  const { id } = requisicao.params;
  try {
    const retorno = await servicoPostagem.removerPostagem(id);
    resposta.status(204).json(retorno);
  } catch (e) {
    proximo(e);
  }
});

export default roteador;
