// cria novo elemento
let novoElemento = document.createElement("p")
// Adicionado texto com o DOM no elemento criado acima
let texto = document.createTextNode("testando a inserssão com DOM")
novoElemento.appendChild(texto)
// indica onde vai criar o elemento acima
let elementoAlvo = document.querySelector("#titulo-principal")
// em qual estrutura esta o elemento alvo
let elementoPai = document.querySelector("#container-principal")

// inserindo o novo elemento criado
elementoPai.insertBefore(novoElemento, elementoAlvo)

