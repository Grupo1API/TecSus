import "./style.css";
import Menu from "../../components/menu";
import { useEffect, useState } from "react";
import baseURL from "../../utils";
import GraficoAgua from "../../components/graficoAgua/index";
import GraficoEnergia from "../../components/graficoEnergia/index";
import CardQtd from "../../components/blocoQuantidade";

function Dashboard() {
  const [listaRelatorioAguas, setListaRelatorioAguas] = useState([]);
  const [listaRelatorioEnergia, setListaRelatorioEnergia] = useState([]);
  const [qtdUnidade, setQtdUnidade] = useState("");
  const [qtdAgua, setQtdAgua] = useState("");
  const [qtdEnergia, setQtdEnergia] = useState("");
  const [qtdConcessionaria, setQtdConcessionaria] = useState("");

  useEffect(() => {
    listaAgua();
    listaEnergia();
    quantidade();
  }, []);

  async function listaAgua() {
    try {
      const response = await fetch(`${baseURL}/contadeagua`, {
        method: "GET",
      });
      const data = await response.json();
      setListaRelatorioAguas(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function listaEnergia() {
    try {
      const response = await fetch(`${baseURL}/contadeenergia`, {
        method: "GET",
      });
      const data = await response.json();
      setListaRelatorioEnergia(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function quantidade() {
    try {
      const unidade = await fetch(`${baseURL}/cadastrounidade`);
      const dataUnidade = await unidade.json();
      setQtdUnidade(dataUnidade.length);

      const contratosAgua = await fetch(`${baseURL}/contratoagua`);
      const dataAgua = await contratosAgua.json();
      setQtdAgua(dataAgua.length);

      const contratosEnergia = await fetch(`${baseURL}/contratoenergia`);
      const dataEnergia = await contratosEnergia.json();
      setQtdEnergia(dataEnergia.length);

      const concessionaria = await fetch(`${baseURL}/cadastroconcessionaria`);
      const dataConcessionaria = await concessionaria.json();
      setQtdConcessionaria(dataConcessionaria.length);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="quadroUnidade">
      <Menu />
      <div className="containerDashboard">
        <h1 className="titulo">Dashboard</h1>
        <div className="info">
          <CardQtd info="Unidades" quantidade={qtdUnidade} />
          <CardQtd info="Concessionárias" quantidade={qtdConcessionaria} />
          <CardQtd info="Contratos Água" quantidade={qtdAgua} />
          <CardQtd info="Contratos Energia" quantidade={qtdEnergia} />
        </div>
        <div>
          <h2>Grafico das contas de água</h2>
          <GraficoAgua listaRelatorioAguas={listaRelatorioAguas} />
        </div>
        <div>
          <h2>Grafico das contas de energia</h2>
          <GraficoEnergia listaRelatorioEnergia={listaRelatorioEnergia} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
