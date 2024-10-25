const bd = require("../../config/database");
const CLIENTES = require("../BD/crudClientes");

class controllerCLIENTES {
  
  // método do SELECT FULL
  pegaTodosOsDadosDaTabelaCLIENTES() {
    return function(request,response) {
      const clieCRUD = new CLIENTES(bd);
      clieCRUD.todosDadosTabelaClientes()
      .then((resultados) => {
        console.log(resultados);
        response.status(200).json(resultados);
      })
      .catch(erro => console.log(erro));
    };
  };

  // método do SELECT por ID
  pegaDadosExpecificoDaTabelaCLIENTES() {
    return function(request,response) {
      var { idClie } = request.params;
      const clieCRUD = new CLIENTES(bd);
      clieCRUD.idDadosTabelaClientes(idClie)
      .then((resultados) => {
        console.log("Exibindo dados específicos de um CLIENTE");
        console.log(resultados);
        response.status(200).json(resultados);
      })
      .catch(erro => console.log(erro));
    }
  }

  // método do INSERT
  fazInclusaoDeNovoCliente() {
    return function(request,response) {
      // pegar os dados do insert via REQUEST.BODY
      var dadosVindoDoPostman = request.body;
      var cpfClie       = request.body.cpfClie;
      var nomeClie      = request.body.nomeClie;
      var dataNiverClie = request.body.dataNiverClie;
      var emailClie     = request.body.emailClie;
      // criando uma lista com os dados da tabela CLIENTES
      const dados = { cpfClie, nomeClie, dataNiverClie, emailClie };
      console.log("POSTMAN  = " + dados.cpfClie + " - " + dados.nomeClie + " - " + dados.dataNiverClie + " -" + dados.emailClie);
      const clieCRUD = new CLIENTES(bd);
      clieCRUD.insereNovoClienteNaTabelaClientes(dados)
      .then(() => {
          console.log("Incluindo um novo cliente na tabela CLIENTES");
          response.status(200).json({ mensagem: 'Método fazInclusaoNovoCliente() OK!'});
      })
      .catch(erro => console.log(erro));
    };
  };

  // método do UPDATE
  fazAlteracaoDeDadosDoCliente() {
    return function(request,responses) {
      const clieCRUD = new CLIENTES(bd);
      var { idClie } = request.params;
      var cpfClie = request.body.cpfClie;
      var nomeClie = request.body.nomeClie;
      var dataNiverClie = request.body.dataNiverClie;
      var emailClie = request.body.emailClie;
      const dados = { cpfClie, nomeClie, dataNiverClie, emailClie };
      console.log("POSTMAN  = " + dados.cpfClie + " - " + dados.nomeClie + " - " + dados.dataNiverClie + " -" + dados.emailClie);

      clieCRUD.atualizaDadosDoClienteNaTabelaClientes(idClie,dados)
      .then(() => {
        console.log("Atualizando um cliente na tabela CLIENTES");
        response.status(200).json({ mensagem: 'Método atualizaDadosDoClienteNaTabelaClientes() OK!' })
      })
      .catch(erro => console.log(erro));
    };
  };

  // método do DELETE
  fazExclusaoDeDadosDoCliente() {
    return function(request,response) {
      const clieCRUD = new CLIENTES(bd);
      var { idClie } = request.params;

      clieCRUD.excluiDadosDoClienteNaTabelaClientes(idClie)
      .then(() => {
        console.log("Excluindo um cliente na tabela CLIENTES");
        response.status(200).json({ mensagem: 'Método excluiDadosDoClienteNaTabelaClientes() OK!' })
      })
      .catch(erro => console.log(erro));
    };
  };
}

module.exports = controllerCLIENTES;