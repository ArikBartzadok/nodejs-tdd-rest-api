import express from 'express';

const roteador = express.Router();

roteador.get('/postagens', async (requisicao, resposta) => {
  resposta.json([
    {
      id: 1,
      titulo: 'teste',
    }
  ])
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
