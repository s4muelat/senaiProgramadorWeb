import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AlteraBotao from './EventoOnChange';
import OnMouse from './componentes/onMouseEnter';
import ListaDeFrutas from './componentes/ListaDeFrutas';
import ListaDeFrutasID from './componentes/ListaDeFrutasID';

function App() {

    return (
        <div className='main'>
            <ListaDeFrutasID />

        </div>
    )
}

export default App