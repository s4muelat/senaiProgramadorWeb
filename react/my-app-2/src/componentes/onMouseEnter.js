import React, { useState } from 'react';

function OnMouse() {
  // Estado para armazenar se o mouse está sobre o elemento
  const [hovered, setHovered] = useState(false);

  // Função para lidar com o mouse entrando
  const handleMouseEnter = () => {
    setHovered(true);
  };

  // Função para lidar com o mouse saindo
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="caixa"
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: hovered ? 'lightgreen' : 'lightblue',
        textAlign: 'center',
        lineHeight: '200px',
        fontSize: '12pt',
        transition: 'background-color 0.3s',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hovered ? 'Você passou o mouse!' : 'Passe o mouse aqui'}
    </div>
  );
}

export default OnMouse;