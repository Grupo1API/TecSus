import Menu from '../../components/menu'
import QuadroConcessionarias from '../../components/quadro_concessionaria/index'
import './style.css'

export default function QuadroConcessionaria() {
    return (
        <div className="quadroConcessionaria">  
            <Menu/>
            <div className='containerQuadroConce'>
                <h1 className="titulo">Quadro de Concessionaria</h1>
                <QuadroConcessionarias/>
            </div>
            
        </div>
    )
}