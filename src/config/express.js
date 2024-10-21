const cors = require("cors")
const express = require("express");
const aplicacao = express();

// aplicação usaraá o CORS
aplicacao.use(cors());

// configurando possibilidade de uso de jso na aplicação
aplicacao.use(express.json());

const rotas = require("../app/ROTAS/rotas");
rotas(aplicacao);

module.exports = aplicacao;