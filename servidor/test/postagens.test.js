// jest.setTimeout(10000)

import crypto from 'crypto';
import axios from 'axios';
import servicoPostagem from '../servicos/postagem';

const gerardor = () => {
  return crypto.randomBytes(20).toString('hex');
};

const requisicao = ({
  servidor = 'http://localhost:3000',
  endpoint,
  metodo,
  dados = null
}) => {
  const url = `${servidor}${endpoint}`;
  return axios({
    url,
    method: metodo,
    data: dados,
    validateStatus: false
  });
};

describe('Obter postagens.', () => {

  it('Obter lista de postagens', async () => {
    const postagem1 = await servicoPostagem.inserirPostagem({
      titulo: gerardor(),
      conteudo: gerardor()
    });
    const postagem2 = await servicoPostagem.inserirPostagem({
      titulo: gerardor(),
      conteudo: gerardor()
    });
    const postagem3 = await servicoPostagem.inserirPostagem({
      titulo: gerardor(),
      conteudo: gerardor()
    });
  
    const retorno = await requisicao({
      endpoint: '/postagem/v1/postagens',
      metodo: 'GET'
    });
    
    expect(retorno.status).toBe(200);
    expect(retorno.data).toHaveLength(3);
  
    await servicoPostagem.removerPostagem(postagem1.id);
    await servicoPostagem.removerPostagem(postagem2.id);
    await servicoPostagem.removerPostagem(postagem3.id);
  });

});

describe('Inserir postagens.', () => {

  it('Inserir uma nova postagem', async () => {
    const postagem = { titulo: gerardor(), conteudo: gerardor() };
  
    const retorno = await requisicao({
      endpoint: '/postagem/v1/postagens',
      metodo: 'POST',
      dados: postagem
    });
    
    expect(retorno.status).toBe(201);
    expect(retorno.data).toMatchObject(postagem);
  
    await servicoPostagem.removerPostagem(retorno.data.id);
  });

  it('Não deve inserir uma nova postagem com titulo duplicado', async () => {
    const postagem = { titulo: gerardor(), conteudo: gerardor() };
  
    const retorno1 = await requisicao({
      endpoint: '/postagem/v1/postagens',
      metodo: 'POST',
      dados: postagem
    });
    const retorno2 = await requisicao({
      endpoint: '/postagem/v1/postagens',
      metodo: 'POST',
      dados: postagem
    });
    
    expect(retorno1.status).toBe(201);
    expect(retorno2.status).toBe(409);
  
    await servicoPostagem.removerPostagem(retorno1.data.id);
  });

});

describe('Alterar postagens.', () => {

  it('Alterar uma postagem', async () => {
    const postagem = await servicoPostagem.inserirPostagem({
      titulo: gerardor(),
      conteudo: gerardor()
    });

    postagem.titulo = gerardor();
    postagem.conteudo = gerardor();
  
    const retorno = await requisicao({
      endpoint: `/postagem/v1/postagens/${postagem.id}`,
      metodo: 'PUT',
      dados: postagem
    });

    expect(retorno.status).toBe(204);

    const postagemAlterada = await servicoPostagem.obterPostagem(postagem.id);
    
    expect(postagemAlterada).toMatchObject(postagem);
  
    await servicoPostagem.removerPostagem(postagem.id);
  });

  it('Não deve alterar uma postagem inexistente', async () => {
    const postagem = { id: 1 };

    const retorno = await requisicao({
      endpoint: `/postagem/v1/postagens/${postagem.id}`,
      metodo: 'PUT',
      dados: postagem
    });

    expect(retorno.status).toBe(404);
  });

});

describe('Remover postagens.', () => {

  it('Remover uma postagem', async () => {
    const postagem = await servicoPostagem.inserirPostagem({
      titulo: gerardor(),
      conteudo: gerardor()
    });
  
    const retorno = await requisicao({
      endpoint: `/postagem/v1/postagens/${postagem.id}`,
      metodo: 'DELETE'
    });

    expect(retorno.status).toBe(204);

    const verificacao = await servicoPostagem.obterPostagens();
    
    expect(verificacao).toHaveLength(0);
  });

});
