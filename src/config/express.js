const express = require("express");
const aplicacao = express();

// configurando possibilidade de uso de jso na aplicação
aplicacao.use(express.json());

const rotas = require("../app/ROTAS/rotas");
rotas(aplicacao);

module.exports = aplicacao;