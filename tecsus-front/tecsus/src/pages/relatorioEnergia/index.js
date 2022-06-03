import GraficoEnergia from "../../components/graficoEnergia/index";
import Menu from "../../components/menu";
import RelatorioEnerg from "../../components/relatorio_energia/index";
import TextField from "@material-ui/core/TextField";
import { useEffect, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import baseURL from "../../utils";
import "./style.css";

function RelatorioEnergia() {
  const [cpf_cnpjUnidade, setCpf_cnpjUnidade] = useState("");
  const [unidade, setUnidade] = useState("");
  const [unidadeId, setUnidadeId] = useState("");
  const [contratoId, setContratoId] = useState("");
  const [dadosContratos, setDadosContratos] = useState("");
  const [listaRelatorioEnergia, setListaRelatorioEnergia] = useState([]);

  useEffect(() => {
    const buscaContrato = async () => {
      const responseContrato = await fetch(
        `${baseURL}/contrato/energia/${unidadeId}`
      );
      const dadosContrato = await responseContrato.json();
      setDadosContratos(dadosContrato);
      console.log(dadosContrato)
    };
    buscaContrato();
  }, [unidadeId]);

  async function buscaUnidade() {
    try {
      const responseUnidade = await fetch(
        `${baseURL}/unidades/${cpf_cnpjUnidade}`
      );
      const dadosUnidade = await responseUnidade.json();
      setUnidade(dadosUnidade.nome);
      setUnidadeId(dadosUnidade.id);
      return;
    } catch (error) {
      return console.log(error.message);
    }
  }

  async function listRelatorioEnergia() {
    try {
      const response = await fetch(
        `${baseURL}/contasdocontrato/energia/${contratoId}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setListaRelatorioEnergia(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <div className="container">
        <div className="content">
          <Menu />
        </div>
        <div className="sectionGrafico">
          <h1>Relatorio de Energia</h1>
          <div>
            <h2>Filtro</h2>
            <div className="filtro">
              <TextField
                type="text"
                required
                placeholder="CPF/CNPJ da Unidade"
                value={cpf_cnpjUnidade}
                onChange={(e) => setCpf_cnpjUnidade(e.target.value)}
                label="CPF/CNPJ da Unidade"
                onBlur={buscaUnidade}
                variant="outlined"
                className="input"
              />
              <TextField
                type="text"
                placeholder="Unidade"
                value={unidade}
                disabled
                className="input"
                label="Unidade"
                variant="outlined"
              />
              <FormControl variant="outlined" className="select input">
                <InputLabel id="demo-simple-select-outlined-label">
                  Contratos
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={contratoId}
                  onChange={(e) => setContratoId(e.target.value)}
                  label="Contratos"
                >
                  {dadosContratos &&
                    dadosContratos.map((x) => (
                      <MenuItem
                        value={x.id}
                      >{`ID: ${x.id} / Concessionaria: ${x.contrato_concessionaria_id.nome} / Nº Instalação: ${x.numero_instalacao}`}</MenuItem>
                    ))}
                </Select>
              </FormControl>
              <Button
                onClick={listRelatorioEnergia}
                type="button"
                variant="contained"
                color="primary"
                size="large"
              >
                Pesquisar
              </Button>
            </div>
          </div>
          <GraficoEnergia listaRelatorioEnergia={listaRelatorioEnergia} />
        </div>
        <div className="sectionQuadro">
          <h2>Contas Energia</h2>
          <RelatorioEnerg listaRelatorioEnergia={listaRelatorioEnergia} />
        </div>
      </div>
    </div>
  );
}

export default RelatorioEnergia;
