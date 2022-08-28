//Chama o Express para o projeto
let express = require("express");
//Incorpora o Express a uma variavel
let app = express();

// ESTRUTURA PARA CRIAR ROTAS NO EXPRESS
// Criando uma rota com express
app.get("/", function (req, res) {
  res.send("Primeira rota com express");
});
//Criando uma segunda rota
app.get("/teste", function (req, res) {
  res.send("Testand outra rota com express");
});
//Criando uma Terceira rota
app.get("/teste/testando", function (req, res) {
  res.send("Testando rota dentro de rota com express");
});
//Instancia o express a porta desejada passado uma mensagem de sucesso
app.listen(3000, function () {
  console.log("A Aplicação esta funcionando na port 3000");
});
