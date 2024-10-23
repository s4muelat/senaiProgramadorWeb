class Pessoa {

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Olá, meu nome é ${this.nome}.`);
  }
}

const joao = new Pessoa('João', 30);
joao.falar(); // "Olá, meu nome é João."

