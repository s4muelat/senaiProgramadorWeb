import MinhaImagem from './react.png'

import './index.css'

function Img() {

    return (
        <div>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5_pFXLFlros8tRZoOHLVZVI30KJEU411IQ&s'
                className='MyImg'
                id='123'
                alt='Minha imagem'
            />
            <img
                src={MinhaImagem}
                className='MyImg'
                id='123'
                alt='Minha imagem'
            />
        </div>
    )
}

export default Img