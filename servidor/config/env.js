import dotenv from 'dotenv';

dotenv.config();

export default {
  infra: {
    banco: {
      usuario: process.env.POSTGRESS_USUARIO,
      senha: process.env.POSTGRESS_SENHA,
      servidor: process.env.POSTGRESS_SERVIDOR,
      porta: process.env.POSTGRESS_PORTA,
      banco: process.env.POSTGRESS_BANCO
    },
    cache: {}
  }
};
