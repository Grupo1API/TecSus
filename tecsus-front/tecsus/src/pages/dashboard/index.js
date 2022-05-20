import Grafico from "../../components/dadosUsina/grafico";
import Menu from "../../components/menu/index";
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
      </div>
    </div>
  );
}

export default Dashboard;

