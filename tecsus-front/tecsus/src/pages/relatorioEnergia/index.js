import GraficoEnergia from "../../components/graficoEnergia/index";
import Menu from "../../components/menu";
import RelatorioEnerg from "../../components/relatorio_energia/index";

import "./style.css";

function RelatorioEnergia() {
  return (
    <div>
      <div className="container">
        <div className="content">
          <Menu />
        </div>
        <div className="sectionGrafico">
          <h1>Relatorio de Energia</h1>
          <GraficoEnergia />
        </div>
        <div className="sectionQuadro">
          <h2>Contas Energia</h2>
          <RelatorioEnerg />
        </div>
      </div>
    </div>
  );
}

export default RelatorioEnergia;
