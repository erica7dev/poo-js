//sistema de cassino
//varios tipos de dados
//rolar dados

class Dados{

    constructor(faces){
        this.faces = faces;
    }

    Rolar(){
        console.log("Resultado do dado: " + this.getRandomIntInclusive(1, this.faces));
    }

    getRandomIntInclusive(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min+1)) + min;
    }
}

var d6 = new Dados(6);
var d12 = new Dados(12);
var d100 = new Dados(100);

d6.Rolar();
d12.Rolar()
d100.Rolar()