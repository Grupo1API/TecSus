import "./style.css";
import Menu from "../../components/menu";
import { useState } from "react";
import NumberFormat from "react-number-format";
import TextField from "@material-ui/core/TextField";

function ContratoEnergia() {
  const [concessionaria, setConcessionaria] = useState(""); //marcar como novo no cadastro
  const [cnpj_concessionaria, setCnpj_concessionaria] = useState(""); //marcar como novo no cadastro
  const [nome_cliente, setNome_cliente] = useState("");
  const [cpf_cnpj_cliente, setCpf_cnpj_cliente] = useState("");
  const [codigo_identificador, setCodigo_identificador] = useState("");
  const [codigo_fiscal, setCodigo_fiscal] = useState("");
  const [grupo_sub, setGrupo_sub] = useState("");
  const [classe_sub, setClase_sub] = useState("");
  const [tp_fornecimento, setTp_fornecimento] = useState("");
  const [modalidade_taf, setModalidade_taf] = useState("");
  const [tensao_nominal, setTensao_nominal] = useState("");
  const [roteiro_leitura, setRoteiro_leitura] = useState("");
  const [medidor, setMedidor] = useState("");
  const [valor_medio, setValor_medio] = useState("");
  const [end_eletrico, setEnd_eletrico] = useState("");
  const [cpf_cnpj_ci, setCpf_cnpj_ci] = useState("");
  const [cep_consumo, setCep_consumo] = useState("");
  const [rua_consumo, setRua_consumo] = useState("");
  const [bairro_consumo, setBairro_consumo] = useState("");
  const [cidade_consumo, setCidade_consumo] = useState("");
  const [estado_consumo, setEstado_consumo] = useState("");
  const [nResidencial_empresarial, setNResidencial_empresarial] = useState("");
  const [concessionariaId, setConcessionariaId] = useState("");
  const [unidadeId, setUnidadeId] = useState("");
  const [numero_instalacao, setNumero_instalacao] = useState("");

  async function buscaCep() {
    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${cep_consumo}/json/`
      );
      const dados = await response.json();
      setRua_consumo(dados.logradouro);
      setBairro_consumo(dados.bairro);
      setCidade_consumo(dados.localidade);
      setEstado_consumo(dados.uf);
    } catch (error) {
      return console.log(error.message);
    }
  }

  async function buscaUnidade() {
    try {
      const response = await fetch(
        `http://localhost:8080/unidades/${cpf_cnpj_cliente}`
      );

      const dados = await response.json();
      setNome_cliente(dados.nome);
      setUnidadeId(dados.id);
    } catch (error) {
      return console.log(error.message);
    }
  }
  async function buscaConcessionaria() {
    try {
      const response = await fetch(
        `http://localhost:8080/concessionaria/${cnpj_concessionaria}`
      );
      const dados = await response.json();
      setConcessionaria(dados.nome);
      setConcessionariaId(dados.id);
    } catch (error) {
      return console.log(error.message);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const dado = {
      classe_subclasse: classe_sub,
      cnpj_cpf_ci: cpf_cnpj_ci,
      codigo_identificador: codigo_identificador,
      codigo_fiscal_operacao: codigo_fiscal,
      endereco_eletrico: end_eletrico,
      concessionaria: concessionaria,
      concessionaria_cnpj: cnpj_concessionaria,
      nome_unidade: nome_cliente,
      cpf_cnpj: cpf_cnpj_cliente,
      grupo_subgrupo: grupo_sub,
      tp_fornecimento: tp_fornecimento,
      modalidade_tarifaria: modalidade_taf,
      tensao_nominal: tensao_nominal,
      roteiro_leitura: roteiro_leitura,
      num_medidor: medidor,
      valor_medio: valor_medio,
      local_cep: cep_consumo,
      local_rua: rua_consumo,
      local_bairro: bairro_consumo,
      local_cidade: cidade_consumo,
      local_estado: estado_consumo,
      local_numero: nResidencial_empresarial,
      numero_instalacao: numero_instalacao,
      contrato_concessionaria_id: { id: concessionariaId },
      contrato_unidade_id: { id: unidadeId },
    };

    try {
      await fetch("http://localhost:8080/contratoenergia/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dado),
      });
      setConcessionaria("");
      setCnpj_concessionaria("");
      setNome_cliente("");
      setCpf_cnpj_cliente("");
      setCodigo_identificador("");
      setCodigo_fiscal("");
      setGrupo_sub("");
      setClase_sub("");
      setTp_fornecimento("");
      setModalidade_taf("");
      setTensao_nominal("");
      setRoteiro_leitura("");
      setMedidor("");
      setValor_medio("");
      setEnd_eletrico("");
      setCpf_cnpj_ci("");
      setCep_consumo("");
      setRua_consumo("");
      setBairro_consumo("");
      setCidade_consumo("");
      setEstado_consumo("");
      setNResidencial_empresarial("");
      setNumero_instalacao("");
      return;
    } catch (error) {
      return console.log(error.message);
    }
  }

  return (
    <div className="c_contrato_energia">
      <Menu />
      <div className="containerEnergia">
        <h1 className="titulo">Cadastro de Contrato de Energia</h1>
        <div className="cadastro">
          <form name="cadastro_contrato_Energia" onSubmit={handleSubmit}>
            <div className="coluna">
              <TextField
                id="cnpj_concessionaria"
                className="input"
                type="text"
                required={true}
                label="CNPJ Concessionária"
                placeholder="CNPJ Concessionaria"
                value={cnpj_concessionaria}
                onChange={(e) => setCnpj_concessionaria(e.target.value)}
                onBlur={buscaConcessionaria}
                variant="outlined"
              />
              <TextField
                id="concessionaria"
                className="input"
                type="text"
                disabled
                label="Concessionária"
                value={concessionaria}
                variant="outlined"
              />
              <TextField
                id="cnpj_cpf_cliente"
                className="input"
                type="text"
                required={true}
                label="CNPJ/CPF Unidade"
                placeholder="CNPJ/CPF cliente"
                value={cpf_cnpj_cliente}
                onChange={(e) => setCpf_cnpj_cliente(e.target.value)}
                onBlur={buscaUnidade}
                variant="outlined"
              />
            </div>

            <div className="coluna">
              <TextField
                id="nome_cliente"
                className="input"
                type="text"
                label="Nome Unidade"
                disabled
                value={nome_cliente}
                variant="outlined"
              />
              <TextField
                id="codigo_identificador"
                type="number"
                className="input"
                required={true}
                label="Código Identificador"
                placeholder="Código Identificador"
                value={codigo_identificador}
                variant="outlined"
                onChange={(e) => setCodigo_identificador(e.target.value)}
              />
              <TextField
                id="codigo_fiscal"
                className="input"
                type="text"
                required={true}
                label="Código Fiscal Operação"
                placeholder="Código Fiscal Operação"
                value={codigo_fiscal}
                onChange={(e) => setCodigo_fiscal(e.target.value)}
                variant="outlined"
              />
            </div>

            <div className="coluna">
              <TextField
                id="grupo_sub"
                className="input"
                type="text"
                required={true}
                label="Grupo/Subgrupo"
                placeholder="Grupo/Subgrupo"
                value={grupo_sub}
                onChange={(e) => setGrupo_sub(e.target.value)}
                variant="outlined"
              />
              <TextField
                id="classe_sub"
                className="input"
                type="text"
                required={true}
                label="Classe/Subclasse"
                placeholder="Classe/Subclasse"
                value={classe_sub}
                onChange={(e) => setClase_sub(e.target.value)}
                variant="outlined"
              />
              <TextField
                id="tp_fornecimento"
                className="input"
                type="text"
                required={true}
                label="TP Fornecimento"
                placeholder="TP Fornecimento"
                value={tp_fornecimento}
                onChange={(e) => setTp_fornecimento(e.target.value)}
                variant="outlined"
              />
            </div>

            <div className="coluna">
              <TextField
                id="modalidade_taf"
                className="input"
                type="text"
                required={true}
                label="Modalidade Tarifaria"
                placeholder="Modalidade Tarifaria"
                value={modalidade_taf}
                onChange={(e) => setModalidade_taf(e.target.value)}
                variant="outlined"
              />
              <TextField
                id="tensao_nominal"
                className="input"
                type="text"
                required={true}
                label="Tensão Nominal"
                placeholder="Tensão Nominal"
                value={tensao_nominal}
                onChange={(e) => setTensao_nominal(e.target.value)}
                variant="outlined"
              />
              <TextField
                id="roteiro_leitura"
                className="input"
                required={true}
                type="text"
                label="Roteiro de Leitura"
                placeholder="Roteiro de Leitura"
                value={roteiro_leitura}
                onChange={(e) => setRoteiro_leitura(e.target.value)}
                variant="outlined"
              />
            </div>

            <div className="coluna">
              <TextField
                id="medidor"
                className="input"
                type="text"
                required={true}
                label="Nª Medidor"
                placeholder="Nª Medidor"
                value={medidor}
                onChange={(e) => setMedidor(e.target.value)}
                variant="outlined"
              />
              <NumberFormat
                prefix={"R$ "}
                id="valor_medio"
                className="input"
                required={true}
                floatValue={true}
                value={valor_medio}
                label="Valor Medio (R$)"
                placeholder="Valor Medio (R$)"
                customInput={TextField}
                onValueChange={(valores) => {
                  const { floatValue } = valores;
                  setValor_medio(floatValue);
                }}
                variant="outlined"
              />
              <TextField
                id="numero_instalacao"
                className="input"
                type="text"
                required={true}
                label="Nª Instalacao"
                placeholder="Nª Instalacao"
                value={numero_instalacao}
                onChange={(e) => setNumero_instalacao(e.target.value)}
                variant="outlined"
              />
            </div>

            <h4>Local de Consumo</h4>

            <div className="coluna">
              <TextField
                id="end_eletrico"
                className="input"
                type="text"
                required={true}
                label="Endereço Eletrico"
                placeholder="End.Eletrico"
                value={end_eletrico}
                onChange={(e) => setEnd_eletrico(e.target.value)}
                variant="outlined"
              />
              <TextField
                id="Cpf_cnpj_ci"
                className="input"
                type="text"
                required={true}
                label="CPF/CNPJ/CI"
                placeholder="CPF/CNPJ/CI"
                value={cpf_cnpj_ci}
                onChange={(e) => setCpf_cnpj_ci(e.target.value)}
                variant="outlined"
              />
              <TextField
                id="cep_consumo"
                className="input"
                type="text"
                required={true}
                label="CEP"
                placeholder="CEP"
                value={cep_consumo}
                onChange={(e) => setCep_consumo(e.target.value)}
                onBlur={buscaCep}
                variant="outlined"
              />
            </div>

            <div className="coluna">
              <TextField
                id="rua_consumo"
                className="input"
                type="text"
                label="Rua"
                disabled
                value={rua_consumo}
                variant="outlined"
              />
              <TextField
                id="bairro_consumo"
                className="input"
                type="text"
                label="Bairro"
                disabled
                value={bairro_consumo}
                variant="outlined"
              />
              <TextField
                id="cidade_consumo"
                className="input"
                type="text"
                label="Cidade"
                disabled
                value={cidade_consumo}
                variant="outlined"
              />
            </div>

            <div className="coluna">
              <TextField
                id="estado_consumo"
                className="input"
                type="text"
                label="Estado"
                disabled
                value={estado_consumo}
                variant="outlined"
              />
              <TextField
                id="nResidencial_Empresarial"
                className="input"
                type="text"
                required={true}
                label="Nª Residencial/Empresarial"
                placeholder="Nª Residencial/Empresarial"
                value={nResidencial_empresarial}
                onChange={(e) => setNResidencial_empresarial(e.target.value)}
                variant="outlined"
              />
            </div>

            <div className="bt-container">
              <button type="submit" className="cadastrar" id="botao_cad">
                ENVIAR
              </button>
              {/* <h4>Cadastro realizado com exito</h4> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContratoEnergia;
