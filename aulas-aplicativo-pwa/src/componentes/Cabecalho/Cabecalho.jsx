import Avatar from '../Avatar/Avatar'
import './Cabecalho.css'

function Cabecalho() {
    return( 
    <header className='Cabecalho_root'>
        <img src='/favicon.svg' className="img_cabecalho"/>
        

        <Avatar 
        nome="Mariom Heidemann Vaz"
        />
    </header>
    )
}

export default Cabecalho