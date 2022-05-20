import Menu from '../../components/menu'
import QuadroContratoEnergias from '../../components/quadro_conEnergia'
import './style.css'

export default function QuadroContratoEnergia() {
    return (
        <div>  
            <Menu/>
            <div className='containerQuadroContratoEnergia'>
                <h1 className="titulo">Quadro de Contrato de Energia</h1>
                <QuadroContratoEnergias/>
            </div>
            
        </div>
    )
}