let meuNome = prompt("Informe seu nome")

if (meuNome == "Marcio Paranhos"){
    alert(`Seja bem vindo Sir ${meuNome}`)
} else if (meuNome == "Joaquim") {
    alert(`${meuNome}, você precisa comparecer no RH para efetuar o cadastramento de biometria`)
} else {
    alert(`${meuNome}, Você não tem permissão para acessar essa pagina!`)
    alert("Saindo....")
    alert("Caso deseje fazer a autenticação por nome novamente precione F5")
}