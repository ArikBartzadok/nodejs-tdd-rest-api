import dadosPostagem from '../dados/postagens';

const obterPostagens = async () => {
  const retorno = await dadosPostagem.obterPostagens();
  return retorno;
};

const obterPostagem = async (id) => {
  const retorno = await dadosPostagem.obterPostagem(id);
  return retorno;
};

const inserirPostagem = async (postagem) => {
  const retorno = await dadosPostagem.inserirPostagem(postagem);
  return retorno;
};

const alterarPostagem = async (postagem) => {
  const retorno = await dadosPostagem.alterarPostagem(postagem);
  return retorno;
};

const removerPostagem = async (id) => {
  const retorno = await dadosPostagem.removerPostagem(id);
  return retorno;
};

export default {
  obterPostagens,
  obterPostagem,
  inserirPostagem,
  alterarPostagem,
  removerPostagem
};
