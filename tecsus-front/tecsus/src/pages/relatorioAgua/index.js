import GraficoAgua from "../../components/graficoAgua/index";
import Menu from "../../components/menu/index";
import RelatorioAguaa from "../../components/relatorio_agua/index";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./style.css";

function RelatorioAgua() {
  const [cpf_cnpjUnidade, setCpf_cnpjUnidade] = useState("");
  const [unidade, setUnidade] = useState("");
  const [unidadeId, setUnidadeId] = useState("");
  const [contratoId, setContratoId] = useState("");
  const [dadosContratos, setDadosContratos] = useState("");
  const [listaRelatorioAguas, setListaRelatorioAguas] = useState([]);

  async function buscaUnidade() {
    try {
      const responseUnidade = await fetch(
        `http://localhost:8080/unidades/${cpf_cnpjUnidade}`
      );
      const dadosUnidade = await responseUnidade.json();
      setUnidade(dadosUnidade.nome);
      setUnidadeId(dadosUnidade.id);

      const responseContrato = await fetch(
        `http://localhost:8080/contrato/agua/${unidadeId}`
      );
      const dadosContrato = await responseContrato.json();
      setDadosContratos(dadosContrato);
    } catch (error) {
      return console.log(error.message);
    }
  }

  async function listaRelatorioAgua() {
    try {
      const response = await fetch(
        `http://localhost:8080/conta/agua/${contratoId}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(contratoId);
      console.log(data);
      setListaRelatorioAguas(data);
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
          <h1>Relatorio de Água</h1>
          <div>
            <TextField
              type="text"
              required
              placeholder="CPF/CNPJ da Unidade"
              value={cpf_cnpjUnidade}
              onChange={(e) => setCpf_cnpjUnidade(e.target.value)}
              onBlur={buscaUnidade}
              label="CPF/CNPJ da Unidade"
              variant="outlined"
            />
            <TextField
              type="text"
              placeholder="Unidade"
              value={unidade}
              disabled
              label="Unidade"
              variant="outlined"
            />
          </div>
          <div>
            <FormControl variant="outlined" className="select input">
              <InputLabel id="demo-simple-select-outlined-label">
                Contratos
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={contratoId}
                onChange={(e) => setContratoId(e.target.value)}
                onBlur={listaRelatorioAgua}
                label="Contratos"
              >
                {dadosContratos &&
                  dadosContratos.map((x) => (
                    <MenuItem
                      value={x.id}
                    >{`ID: ${x.id} / Concessionaria: ${x.contrato_concessionaria_id.nome} / Nº Fornecimento: ${x.n_fornecimento}`}</MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>
          <GraficoAgua
            contratoId={contratoId}
            listaRelatorioAguas={listaRelatorioAguas}
          />
        </div>
        <div className="sectionQuadro">
          <h2>Contas Água</h2>
          <RelatorioAguaa
            contratoId={contratoId}
            listaRelatorioAguas={listaRelatorioAguas}
          />
        </div>
      </div>
    </div>
  );
}

export default RelatorioAgua;
