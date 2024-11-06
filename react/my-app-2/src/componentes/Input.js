function Input() {

    let tipo = 'text'
    let atributos = {
        myPlaceholder: 'Seu texto aqui',
        id: 'meuId',
        className: 'Minha class'
    }

    return (

        <input
            type={tipo}
            id={atributos.id}
            placeholder={atributos.myPlaceholder}
        >
        </input>

    )

}

export default Input