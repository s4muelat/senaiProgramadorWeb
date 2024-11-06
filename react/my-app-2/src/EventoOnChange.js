import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';

const AlteraBotao = () => {
    const [buttonText, setaNomeBotao] = useState('Clique aqui');

    const handleClick = () => {
        setaNomeBotao(prevText => (prevText === 'Clique aqui' ? 'Você clicou' : 'Clique aqui'));
    };

    return (
        <Button variant="success" onClick={handleClick}>
            {buttonText}
        </Button>
    )
};

export default AlteraBotao;