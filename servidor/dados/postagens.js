import banco from '../infra/banco/conexao';

const obterPostagens = async () => {
  try {
    const retorno = await banco.query('select * from blog.postagem');
    return retorno;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default {
  obterPostagens
};
