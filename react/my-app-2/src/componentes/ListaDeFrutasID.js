const listaDeItens = [
  { id: 1, nome: 'Maçã' },
  { id: 2, nome: 'Banana' },
  { id: 3, nome: 'Laranja' }
];

function ListaDeFrutasID() {
  return (
    <ul>
      {listaDeItens.map(item => (
        <li key={item.id}>{item.nome}</li>
      ))}
    </ul>
  );
}

export default ListaDeFrutasID
