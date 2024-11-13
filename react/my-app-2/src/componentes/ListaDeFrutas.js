const listaDeItens = ['Maçã', 'Banana', 'Laranja'];

function ListaDeFrutas() {
  return (
    <ul>
      {listaDeItens.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ListaDeFrutas

