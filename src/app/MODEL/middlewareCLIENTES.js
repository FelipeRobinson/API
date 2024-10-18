const validaDadosDoBody = (request, response, next) => {
  const { body } = request;
  // validando se o cpf foi enviado via jsons
  if (body.cpfClie === undefined) {
    return response.status(400).json({ mensagem: 'ERRO! Campo CPF do novo cliente não foi enviado!'});
  }
  // validando se o cpf não está null
  if (body.cpfClie === '') {
    return response.status(400).json({ mensagem: 'ERRO! Campo CPF do novo cliente veio vazio!'});
  }
  // tá tudo OK.. segue a vida
  next();
}

const validaSLQInjection = (request, response, next) => {
}

module.exports = {
   validaDadosDoBody
}