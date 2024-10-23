class Mae {

  constructor(nome) {
    this.nome = nome;
  }

  gritar() {

    var nome = this.nome

    function imprimir(nomePessoa) {
      console.log(nomePessoa + ' grita')
    }
    imprimir(nome)
  }

}

class Filha extends Mae {

  corre() {
    console.log(`${this.nome} corre.`)
  }

}

const minhaFilha = new Filha("Aline")
minhaFilha.corre()
minhaFilha.gritar()