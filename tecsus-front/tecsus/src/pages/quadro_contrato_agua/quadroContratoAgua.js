import Menu from '../../components/menu'
import QuadroContratoAguas from '../../components/quadro_conAgua'
import './style.css'

export default function QuadroContratoAgua() {
    return (
        <div className="quadroContratoAgua">  
            <Menu/>
            <div className='containerQuadroContratoAgua'>
                <h1 className="titulo">Quadro de Contrato de Água</h1>
                <QuadroContratoAguas/>
            </div>
            
        </div>
    )
}