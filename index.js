class Filme{
    constructor(titulo,ano,genero,diretor){
        this.titulo = titulo;
        this.ano=ano;
        this.diretor=diretor;
        this.name="",
        this.atores=[];
        this.genero=genero,
        this.duracao=0
    }

    Reproduzir(){
        console.log("Reproduzindo...")
    }

    Pausar(){
        console.log("Pausado || ")
    }

    Avancar(){
        console.log("Avançar >>")
    }

    Fechar(){
        console.log("Fechar X")
    }
}

var justiceLeague = new Filme();
justiceLeague.titulo = "Snyder Cut";
justiceLeague.ano = 2021;
justiceLeague.genero="sciFi";
console.log("Seu filme favorito é:" + justiceLeague.titulo);

var Batman = new Filme();
Batman.Pausar();

var superman = new Filme();
superman.Reproduzir();

var vingadores = new Filme("Vingadores",2017, "sciFi","Não sei")

