// variavel de scopo global
let y = 10

function imprimir() {
    // variavel de scopo local
    let y = 150

    if (y == 150) {
        console.log(y)
        if (y != 150) {

            console.log("Testando if dentro de IF")

        } else {

            console.log("Testando")
        }

    } else {
        
        console.log("Não e um numero valido")
    }

}

imprimir()
console.log(y)