import Grafico1 from "../../components/dadosAgua/index";
import Menu from "../../components/menu/index";
import RelatorioAgua from "../../components/relatorioAgua/index";
import "./style.css";

function Dashboard() {
  return (
    <div>
    <div className="container">
      <div className="content">
        <Menu />
      </div>
      <div className="section">
        <h1 className ="Titulo" >Grafico Água</h1>
        <Grafico1 />
        <h1 className ="Titulo" >Relatorio Água</h1>
        <RelatorioAgua />
      </div>
      
    </div>
  </div>
);
}

export default Dashboard;

