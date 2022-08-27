let express = require("express");
let app = express();

// Criando uma rota com express
app.get("/", function (req, res) {
  res.send("Primeira rota com express");
});

app.listen(3000, function () {
  console.log("A Aplicação esta funcionando na port 3000");
});
