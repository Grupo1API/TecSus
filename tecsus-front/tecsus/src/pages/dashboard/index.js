import Grafico from "../../components/dadosEnergia/grafico";
import Menu from "../../components/menu/index";
import Relatorio from "../../components/relatorioEnergia/index"

import "./style.css";

function Dashboard() {
  return (
    <div>
      <div className="container">
        <div className="content">
          <Menu />
        </div>
        <div className="section">
          <h1>Dashboard</h1>
          <Grafico />
        </div>
        <div className="section">
          <h1>Relatorio Energia</h1>
          <Relatorio />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
