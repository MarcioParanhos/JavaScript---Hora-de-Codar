let express = require("express");
let app = express();

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

app.listen(3000, function () {
  console.log("A Aplicação esta funcionando na port 3000");
});
