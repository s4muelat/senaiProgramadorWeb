const pessoa = {
    nome: 'João',
    idade: 30,
    falar: function() {
      console.log(`Olá, meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
  };

pessoa.falar()
// Saída
// Olá, meu nome é João
