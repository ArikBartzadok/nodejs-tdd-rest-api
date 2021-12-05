import env from '../../config/env';

import pg from 'pg-promise';

const postgress = pg();

const conexao = postgress({
  user: env.infra.banco.usuario,
  password: env.infra.banco.senha,
  host: env.infra.banco.servidor,
  port: Number(env.infra.banco.porta),
  database: env.infra.banco.banco
});

export default conexao;
