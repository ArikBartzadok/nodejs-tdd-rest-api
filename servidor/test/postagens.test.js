const axios = require('axios');

it('Obter lista de postagens', async () => {
  const retorno = await axios.get('http://localhost:3000/postagem/v1/postagens');
  expect(retorno.data).toHaveLength(1);
});
