class Veiculo {
    constructor(tipo) {
        this.tipo = tipo
    }

    descricao() {
        return `Tipo de veículo: ${this.tipo}`
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo) {
        super('Carro') // Chama o construtor da classe pai
        this.marca = marca
        this.modelo = modelo
    }

    detalhes() {
        return `Carro: ${this.marca} ${this.modelo}`
    }
}

const meuCarro = new Carro('Toyota', 'Corolla')
console.log(meuCarro.descricao()) //Tipo de veículo: Carro
console.log(meuCarro.detalhes())  //Carro: Toyota Corolla

