import './style.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Dashboard from './pages/dashboard'
import ContaAgua from './pages/contas_agua';
import ContaEnergia from './pages/contas_energia';
import Concessionaria from './pages/concessionaria';
import ContratoAgua from './pages/contrato_agua';
import ContratoEnergia from './pages/contrato_energia';
import Unidade from './pages/unidade';
import GraficoAgua from './pages/grafico_agua';
import QuadroConcessionaria from './pages/quadro_concessionaria'
import QuadroUnidade from './pages/quadro_unidades/quadroUnidade';
import QuadroContratoAgua from './pages/quadro_contrato_agua/quadroContratoAgua';
import QuadroContratoEnergia from './pages/quadro_contrato_energia/quadroContratoEnergia';


function Main() {
  return (
    <div className="Main">
        <Router>
          <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/contas_agua" element={<ContaAgua />} />
              <Route path="/contas_energia" element={<ContaEnergia />}/>
              <Route path="/concessionaria" element={<Concessionaria />}/>
              <Route path="/contrato_agua" element={<ContratoAgua />}/>
              <Route path="/contrato_energia" element={<ContratoEnergia />}/>
              <Route path="/grafico_agua" element={<GraficoAgua />}/>
              <Route path="/unidade" element={<Unidade />}/>
              <Route path="/grafico_agua" element={<GraficoAgua />}/>
              <Route path="/quadro_concessionaria" element={<QuadroConcessionaria />}/>
              <Route path="/quadro_unidade" element={<QuadroUnidade />}/> 
              <Route path="/quadro_contratoAgua" element={<QuadroContratoAgua />}/> 
              <Route path="/quadro_contratoEnergia" element={<QuadroContratoEnergia />}/> 
            </Routes>
        </Router>
    </div>
  );
}

export default Main;