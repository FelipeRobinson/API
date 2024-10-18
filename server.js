const aplicacao = require("./src/config/express");
const porta = 3333;

aplicacao.listen(porta, () => {
  console.log("API em NODEJS no ar na porta 3000");
});