import  Alerta from "../../components/sisAlert/index";
import Menu from "../../components/menu/index";
import TotalEnergia from "../../components/sisAlertEnergia/index";
import "./style.css";


function Alertaa() {
  return (
    <div>
      <div className="container">
        <div className="content">
          <Menu />
        </div>
        <div className="section">
          <h1 className ="Titulo" >Alertas Água</h1>
          <Alerta />
          <h1 className="Titulo">Alerta Energia</h1>
          <TotalEnergia/>
        </div>
        
      </div>
    </div>
  );
}

export default Alertaa;
