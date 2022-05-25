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
          "http://localhost:8080/contadeagua",
          {
            method: "GET",
          }
        );
  
        const data = await response.json();
        setDadosUsina(data);
      }
      dadosUsina();
    }, []);
    const  dataConsumo = dadosUsina.map((x) => {
      let dataNovo = new Date(x.data_emissao)
      console.log(dataNovo)
      return {
        name: `${dataNovo.getMonth()}/${dataNovo.getFullYear()}`,
        uv: x.consumo_m3,
      };
    });
  
    // const dataConsumo = dadosUsina.map((x) => {
    //   return {

    //     name: parseFloat(x.emissao).toFixed(2),
    //     uv: parseFloat(x.consumo_m3),
    //     // name: `${x.emissao.getMonth()}/${x.emissao.getFullYear()} `, 
    //     // uv: x.consumo_m3,
    //   };
    // });


    const daTaValorTotal = dadosUsina.map((x) => {
      let dataNovo = new Date(x.data_emissao)
      console.log(dataNovo)
      return {
        name: `${dataNovo.getMonth()}/${dataNovo.getFullYear()}`,
        uv: x.valor_total,
      };
    });

  
    // const daTaValorTotal = dadosUsina.map((x) => {
    //   return {
    //   // name: parseFloat(x.emissao).toFixed(2),
    //   // uv: parseFloat(x.consumo_m3),
    //     // name:`${x.emissao.getMonth()}/${x.emissao.getFullYear()} `,
    //     // uv: x.valor_total,
    //   };
    // });
  
    return (
      <div className="main-dados">
        <div className="grafico">
          <AreaChart
            width={1300}
            height={500}
            data={variavelY ? variavelY : daTaValorTotal}
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
              name={legenda ? legenda : "Valor total"}
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
              setVariavelY(daTaValorTotal);
              setLegenda("Valor Total");
            }}
          >
            Valor Total
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setVariavelY(dataConsumo);
              setLegenda("Consumo");
            }}
          >
            Consumo(M3)
          </Button>
        </div>
      </div>
    );
  }
  
  export default Grafico;