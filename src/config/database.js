const mysql = require("mysql2");
const connection = mysql.createConnection({
   host: 'regulus.cotuca.unicamp.br',
   user: 'BD24464',
   password: 'BD24464',
   database: 'BD24464'
});

// método de execute da conexão
connection.connect(function(erro) {
  if (erro) 
    console.log("Erro com a conexão com o BD MARCIA");
  else
    console.log("Conexão com BD MARCIA estabelecida com sucesso!");
});

module.exports = connection;