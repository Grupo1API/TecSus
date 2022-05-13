import Menu from '../../components/menu'
import Quadrounidade from '../../components/quadro_unidade/index'
import './style.css'

export default function QuadroUnidade() {
    return (
        <div className="quadroUnidade">  
            <Menu/>
            <div className='containerQuadroUnid'>
                <h1 className="titulo">Quadro de Unidade</h1>
                <Quadrounidade/>
            </div>
            
        </div>
    )
}