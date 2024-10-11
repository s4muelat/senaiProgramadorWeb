class Animal {

  constructor(nome) {
    this.nome = nome;
  }

  late() {
    console.log(`${this.nome} late.`)
  }

}

class Cachorro extends Animal {

  corre() {
    console.log(`${this.nome} corre.`)
  }

}

const meuCachorro = new Cachorro()
meuCachorro.late() // Rex late 
meuCachorro.corre() // Rex corre
