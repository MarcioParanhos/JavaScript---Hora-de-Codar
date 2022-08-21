let cachorro = {
    raca: 'SRD',
    latir: function () {
        console.log("Au Au")
    },
    correr: function () {
        console.log("Corre atras dele FDP")
    },
    setRaca: function (raca) {
        this.raca = raca
    }
}

console.log(cachorro.raca)
cachorro.setRaca("Pé Duro")
console.log(cachorro.raca)
