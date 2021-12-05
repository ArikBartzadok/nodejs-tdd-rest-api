import banco from '../infra/banco/conexao';

const obterPostagens = () => {
  return banco.query('select * from blog.postagem');
};

const obterPostagem = (id) => {
  return banco.oneOrNone('select * from blog.postagem where id = $1', [id]);
};

const obterPostagemPeloTitulo = (titulo) => {
  return banco.oneOrNone('select * from blog.postagem where titulo = $1', [titulo]);
};

const inserirPostagem = (postagem) => {
  return banco.one('insert into blog.postagem (titulo, conteudo) values ($1, $2) returning *', [postagem.titulo, postagem.conteudo]);
};

const alterarPostagem = (postagem) => {
  return banco.none('update blog.postagem set titulo = $1, conteudo = $2 where id = $3', [ postagem.titulo, postagem.conteudo, postagem.id ]);
};

const removerPostagem = (id) => {
  return banco.none('delete from blog.postagem where id = $1', [id]);
};


export default {
  obterPostagens,
  obterPostagem,
  obterPostagemPeloTitulo,
  inserirPostagem,
  alterarPostagem,
  removerPostagem
};
