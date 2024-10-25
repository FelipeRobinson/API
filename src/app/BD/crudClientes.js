// classe e seus métodos que irão interagir com tabela CLIENTES
class CLIENTES {
  // construtor da classe
  constructor(conexaoBD)
  { this._bd = conexaoBD; }

  // método do SELECT FULL da tabela CLIENTES
  todosDadosTabelaClientes() {
    return new Promise((resolve, reject) => {
      var sql = "SELECT * FROM CLIENTES ORDER BY idClie";
      this._bd.query(sql,function(erro, recordset) {
        if (erro) {
          console.log(erro);
          return reject("Erro no SELECT FULL da tabela CLIENTES");  
        }
        return resolve(recordset);
      });
    });
  };

  // método do SELECT ESPECÍFICO na tabela CLIENTES
  idDadosTabelaClientes(idClie) {
    return new Promise((resolve, reject) => {
      var sql = "SELECT * FROM CLIENTES WHERE id =" + idClie;
      this._bd.query(sql,function(erro,recordset) {
        if (erro) {
          console.log(erro);
          return reject("Ero no SELECT ESPECÍFICO da tabela CLIENTES");
        }
        return resolve(recordset);
      });
    });
  }

  // método do INSERT de novo registro na tabela CLIENTES
  insereNovoClienteNaTabelaClientes(dados) {
    return new Promise((resolve, reject) => {
      const { cpfClie, nomeClie, dataNiverClie, emailClie } = dados;
      var sql = "INSERT INTO CLIENTES (cpfClie, nomeClie, dataNiverClie, emailClie) ";
         sql += "values('" + cpfClie + "','" + nomeClie + "','";
         sql += dataNiverClie + "','" + emailClie + "')";
      this._bd.query(sql, function(erro) {
        if (erro) {
          console.log(erro);
          return reject("Erro no INSERT de novo registro da tabela CLIENTES");
        }
        return resolve("Inserção de CLIENTE concluida com sucesso na tabela CLIENTES");
      });
    });
  };

  atualizaDadosDoClienteNaTabelaClientes(idClie, dados) {
    return new Promise((resolve, reject) => {
      const { cpfClie, nomeClie, dataNiverClie, emailClie } = dados;

      var sql = "UPDATE CLIENTES set nomeClie = '" + dados.nomeClie;
         sql += "', cpfClie = '" + dados.cpfClie;
         sql += "', dataNiverClie = '" + dados.dataNiverClieClie 
         sql += "', emailClie = '" + dados.emailClie + "'";
         sql += "' WHERE idClie = " + idClie;

      this._bd.query(sql, function(erro) {
        if (erro) {
          console.log(erro);
          return reject("Erro no UPDATE de CLIENTE da tabela CLIENTES");
        }
        return resolve("Atualição de CLIENTE concluida com sucesso na tabela CLIENTES");
      });
    });
  };

  excluiDadosDoClienteNaTabelaClientes(idClie) {
    return new Promise((resolve, reject) => {
      var sql = "DELETE FROM CLIENTES WHERE idClie = " + idClie;

      this._bd.query(sql, function(erro) {
        if (erro) {
          console.log(erro);
          return reject("Erro no DELETE de CLIENTE da tabela CLIENTES");
        }
        return resolve("Exclusão de CLIENTE concluida com sucesso na tabela CLIENTES");
      });
    });
  };
}

module.exports = CLIENTES;