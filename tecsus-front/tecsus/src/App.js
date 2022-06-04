import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ContaAgua from "./pages/contas_agua";
import ContaEnergia from "./pages/contas_energia";
import Concessionaria from "./pages/concessionaria";
import ContratoAgua from "./pages/contrato_agua";
import ContratoEnergia from "./pages/contrato_energia";
import Unidade from "./pages/unidade";
import QuadroConcessionaria from "./pages/quadro_concessionaria";
import QuadroUnidade from "./pages/quadro_unidades/quadroUnidade";
import QuadroContratoAgua from "./pages/quadro_contrato_agua/quadroContratoAgua";
import QuadroContratoEnergia from "./pages/quadro_contrato_energia/quadroContratoEnergia";
import Login from "./pages/login/index";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import RotasProtegidas from "./components/rotasProtegidas";
import CadastroUsuario from "./pages/cadastro_usuario";
import RelatorioEnergia from "./pages/relatorioEnergia";
import RelatorioAgua from "./pages/relatorioAgua";
import Alert from "./pages/alerta";

function Main() {
  return (
    <div className="Main">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" exact element={<RotasProtegidas />}>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/contas_agua" element={<ContaAgua />} />
              <Route path="/contas_energia" element={<ContaEnergia />} />
              <Route path="/concessionaria" element={<Concessionaria />} />
              <Route path="/contrato_agua" element={<ContratoAgua />} />
              <Route path="/contrato_energia" element={<ContratoEnergia />} />
              <Route path="/unidade" element={<Unidade />} />
              <Route path="/relatorio_energia" element={<RelatorioEnergia />} />
              <Route path="/relatorio_agua" element={<RelatorioAgua />} />
              <Route path="/cadastro_usuario" element={<CadastroUsuario />} />
              <Route path="/alerta" element={<Alert />} />
              <Route
                path="/quadro_concessionaria"
                element={<QuadroConcessionaria />}
              />
              <Route path="/quadro_unidade" element={<QuadroUnidade />} />
              <Route
                path="/quadro_contratoAgua"
                element={<QuadroContratoAgua />}
              />
              <Route
                path="/quadro_contratoEnergia"
                element={<QuadroContratoEnergia />}
              />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default Main;
