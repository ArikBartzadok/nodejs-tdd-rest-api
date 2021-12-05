import dadosPostagem from '../dados/postagens';

const obterPostagens = async () => {
  const retorno = await dadosPostagem.obterPostagens();
  return retorno;
};

export default {
  obterPostagens
};
