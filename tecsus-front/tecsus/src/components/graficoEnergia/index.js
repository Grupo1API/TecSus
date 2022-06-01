import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useEffect, useState } from "react";
import Radio from "@material-ui/core/Radio";
import "./style.css";

function GraficoEnergia() {
  const [dadosUsina, setDadosUsina] = useState([]);
  const [variavelY, setVariavelY] = useState();
  const [legenda, setLegenda] = useState();
  const [checked, setChecked] = useState("Valor Total R$");

  useEffect(() => {
    async function dadosUsina() {
      const response = await fetch("http://localhost:8080/contadeenergia", {
        method: "GET",
      });
      const data = await response.json();
      setDadosUsina(data);
    }
    dadosUsina();
  }, []);

  const handleChange = (event) => {
    setChecked(event.target.value);
  };

  const dataValor = dadosUsina.map((x) => {
    const arrayData = x.emissao.split("-");
    const ano = `${arrayData[0]}`;
    const mes = `${arrayData[1]}`;
    return {
      name: `${mes}/${ano}`,
      uv: x.valor_total,
    };
  });

  const dataMes = dadosUsina.map((x) => {
    const arrayData = x.emissao.split("-");
    const ano = `${arrayData[0]}`;
    const mes = `${arrayData[1]}`;
    return {
      name: `${mes}/${ano}`,
      uv: x.quantidade_kwh_mes,
    };
  });

  return (
    <div className="main-dados">
      <div className="grafico">
        <AreaChart
          width={900}
          height={450}
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
            name={legenda ? legenda : "Valor Total (R$)"}
            dataKey="uv"
            stroke="#5664D2"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </div>
      <div className="buttons">
        <FormControl component="fieldset">
          <RadioGroup row value={checked} onChange={handleChange}>
            <FormControlLabel
              value="Valor Total R$"
              control={<Radio />}
              label="Valor Total R$"
              onClick={() => {
                setVariavelY(dataValor);
                setLegenda("Valor Total (R$)");
              }}
            />
            <FormControlLabel
              value="Consumo Mês (Kwh)"
              control={<Radio />}
              label="Consumo Mês (Kwh)"
              onClick={() => {
                setVariavelY(dataMes);
                setLegenda("Consumo Mês (Kwh)");
              }}
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}

export default GraficoEnergia;
