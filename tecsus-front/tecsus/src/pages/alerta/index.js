import  Alerta from "../../components/alertaAgua/index";
import Menu from "../../components/menu/index";
import TotalEnergia from "../../components/alertaEnergia/index";
import "./style.css";


function Alert() {
  return (
    <div>
      <div className="container">
        <div className="content">
          <Menu />
        </div>
        <div className="section">
          <h1 className ="Titulo">Alertas</h1>
          <h2>Alerta Água</h2>
          <Alerta />
          <h2>Alerta Energia</h2>
          <TotalEnergia/>
        </div>
        
      </div>
    </div>
  );
}

export default Alert;