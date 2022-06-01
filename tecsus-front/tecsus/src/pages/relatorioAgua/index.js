import GraficoAgua from "../../components/graficoAgua/index";
import Menu from "../../components/menu/index";
import RelatorioAguaa from "../../components/relatorio_agua/index";
import "./style.css";

function RelatorioAgua() {
  return (
    <div>
      <div className="container">
        <div className="content">
          <Menu />
        </div>
        <div className="sectionGrafico">
          <h1>Relatorio de Água</h1>
          <GraficoAgua />
        </div>
        <div className="sectionQuadro">
          <h2>Contas Água</h2>
          <RelatorioAguaa />
        </div>
      </div>
    </div>
  );
}

export default RelatorioAgua;
