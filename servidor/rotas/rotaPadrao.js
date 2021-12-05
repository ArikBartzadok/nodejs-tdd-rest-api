import express from 'express';
import package from '../../package.json';

const roteador = express.Router();

roteador.get('/', async (_, resposta) => {
  resposta.json({
    app: package.name,
    descricao: package.description,
    autor: package.author,
    versao: package.version
  });
});

export default roteador;
