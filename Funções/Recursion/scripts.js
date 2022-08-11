function retornarNumPar(num) {
    
    if (num % 2 == 0) {
        console.log("Isso e um numero par")
    } else {

        // chamando a função novamente caso nao etre no IF
        console.log(num)
        retornarNumPar(num - 1)
    }

}

retornarNumPar(21)