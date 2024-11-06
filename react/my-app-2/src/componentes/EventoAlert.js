import Button from 'react-bootstrap/Button'

function EventoAlert() {
    const handleClick = (nome) => {
        alert(`${nome}`);
    };

    return <button variant="primary" onClick={handleClick.bind(this, 'O campo cidade não foi preenchido.')}>Cadastrar</button>;
}

export default EventoAlert
