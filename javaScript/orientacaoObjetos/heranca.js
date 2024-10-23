class Pessoa {

    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    falar() {
      var altura = 1
      console.log(`Olá, meu nome é ${this.nome}`);
    }
  }

class Funcionario extends Pessoa {
    constructor(nome, idade, cargo) {
      super(nome, idade);
      this.cargo = cargo;
    }
  
    apresentar() {
      console.log(`Eu sou ${this.nome}, trabalho como ${this.cargo}`);
    }
  }
  
  const maria = new Funcionario('Maria', 28, 'Desenvolvedora');
  //maria.apresentar(); // "Eu sou Maria, trabalho como Desenvolvedora"
  maria.falar('Maria', 50)
