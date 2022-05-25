import {
  AreaChart,
  linearGradient,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import "./style.css";

function Grafico() {
  const [dadosUsina, setDadosUsina] = useState([]);
  const [variavelY, setVariavelY] = useState();
  const [legenda, setLegenda] = useState();

  useEffect(() => {
    async function dadosUsina() {
      const response = await fetch(
        "http://localhost:8080/contadeenergia",
        {
          method: "GET",
        }
      );

      const data = await response.json();
      setDadosUsina(data);
    }
    dadosUsina();
  }, []);
/*
  const dataValor = dadosUsina.map((x) => {
    return {
      name: parseFloat(x.emissao).toFixed(2),
      uv: parseFloat(x.valor_total),
    };
  });
*/

  const dataValor = dadosUsina.map((x) => {
    let dataNovo = new Date(x.emissao)
    console.log(dataNovo)
    return {
      name: `${dataNovo.getMonth()}/${dataNovo.getFullYear()}`,
      uv: x.valor_total,
    };
  });

  const dataMes = dadosUsina.map((x) => {
    let dataNovo = new Date(x.emissao)
    return {
      name: `${dataNovo.getMonth()}/${dataNovo.getFullYear()}`,
      uv: x.quantidade_kwh_mes,
    };
  });

  return (
    <div className="main-dados">
      <div className="grafico">
        <AreaChart
          width={1300}
          height={500}
          data={variavelY ? variavelY : dataValor}
          margin={{ top: 30, right: 20, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="2">
              <stop offset="5%" stopColor="#5664D2" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#5664D2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            name={legenda ? legenda : "Valor Total"}
            dataKey="uv"
            stroke="#5664D2"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </div>
      <div className="buttons">
        <Button
          variant="outlined"
          onClick={() => {
            setVariavelY(dataValor);
            setLegenda("Valor Total");
          }}
        >
          R$ Valor Total
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            setVariavelY(dataMes);
            setLegenda("Consumo Mês");
          }}
        >
          Consumo Mês (Kwh)
        </Button>
        
      </div>
    </div>
  );
}

export default Grafico;
