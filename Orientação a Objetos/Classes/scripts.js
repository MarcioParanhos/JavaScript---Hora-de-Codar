let cachorro = {
    raca: "SRD"
}

let peDuro = Object.create(cachorro)

peDuro.raca = "Pe Duro"

console.log(peDuro)