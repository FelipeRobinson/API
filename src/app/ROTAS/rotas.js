module.exports = (aplicacao) => {
   const clientesController = require("../CONTROLLERS/controllerCLIENTES");
   const obj_clieController = new clientesController();

   // chamando as funções da middlewareCLIENTES
   const clienteMiddleware = require('../MODEL/middlewareCLIENTES');

   // ***************************** ROTAS *****************************    
   // rota padrão
   aplicacao.get("/",(request,response) => {
      console.log("Acessando rota principal");
      response.status(200).send("Iniciando API em NODEJS");
   });

   // GET = para rodar SELECT na tabela CLIENTES
   aplicacao.get("/Clientes",obj_clieController.pegaTodosOsDadosDaTabelaCLIENTES());

   // POST = para rodar INSERT na tabela CLIENTES
   aplicacao.post("/Clientes",clienteMiddleware.validaDadosDoBody,obj_clieController.fazInclusaoDeNovoCliente());

   // PUT = para rodar UPDATE na tabela CLIENTES
   aplicacao.put("/Clientes/:idClie",obj_clieController.fazAlteracaoDeDadosDoCliente());

   // DELETE = para rodar o DELETE na tabela CLIENTES
   aplicacao.delete("/Clientes/:idClie",obj_clieController.fazExclusaoDeDadosDoCliente());
}