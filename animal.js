class Animal{
    constructor(nome,idade,preco){
        this.nome=nome;
        this.idade=idade;
        this.preco=preco;
    }
    ChecarEstoque(){
        return 10;
    }

    Vacinacao(){
        console.log("Pet está vacinado?")
    }
}

class Cachorro extends Animal{
    Latir(){
        console.log("auuuu")
    }

    //reutilizacao de metodo da classe mãe com mais coisa

    constructor(nome,idade,preco){
        super(nome,idade,preco)
        this.raca = raca;
        this.peso = peso;
    }

    Vacinacao(){
        console.log("pet vacinado?")
        super.Vacinacao();
        console.log("roupinha tá caro")
    }
}

var dog = new Cachorro("Dudu", 2, 20);
dog.ChecarEstoque();