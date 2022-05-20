import "./style.css";
import Menu from "../../components/menu";
import { useState } from "react";
import NumberFormat from "react-number-format";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function ContaEnergia() {
  const [cep_cliente, setCep_cliente] = useState("");
  const [nota_fiscal, setNota_fiscal] = useState("");
  const [valor_total, setValor_total] = useState("");
  const [numero_instalacao, setNumero_instalacao] = useState("");
  const [data_vencimento, setData_vencimento] = useState("");
  const [conta_mes, setConta_mes] = useState("");
  const [bandeiraTarifaria, setBandeiraTarifaria] = useState("");
  const [emissao, setEmissao] = useState("");
  const [dias_faturamento, setDias_faturamento] = useState("");
  const [descricao_consumo, setDescricao_consumo] = useState("");
  const [const_multa, setConst_multa] = useState("");
  const [kwhMes, setKwhMes] = useState("");
  const [concessionaria, setConcessionaria] = useState("");
  const [cep_concessionaria, setCep_concessionaria] = useState("");
  const [cnpj_concessionaria, setCnpj_concessionaria] = useState("");
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
  const [valor_total_tusd, setValor_total_tusd] = useState("");
  const [valor_total_te, setValor_total_te] = useState("");
  const [valor_total_bandeira, setValor_total_bandeira] = useState("");
  const [multa, setMulta] = useState("");
  const [cip, setCip] = useState("");
  const [valor_pis, setValor_pis] = useState("");
  const [valor_cofins, setValor_cofins] = useState("");
  const [upload, setUpload] = useState("");
  const [contratoId, setContratoId] = useState("");

  async function buscaContrato() {
    try {
      const response = await fetch(
        `http://localhost:8080/contratoenergia/${numero_instalacao}`
      );
      const dados = await response.json();
      setCnpj_concessionaria(dados.contrato_concessionaria_id.cnpj);
      setConcessionaria(dados.contrato_concessionaria_id.nome);
      setCep_concessionaria(dados.contrato_concessionaria_id.cep);
      setCpf_cnpj_cliente(dados.contrato_unidade_id.cpf_cnpj);
      setNome_cliente(dados.contrato_unidade_id.nome);
      setCep_cliente(dados.contrato_unidade_id.end_cep);
      setCodigo_identificador(dados.codigo_identificador);
      setCodigo_fiscal(dados.codigo_fiscal_operacao);
      setGrupo_sub(dados.grupo_subgrupo);
      setClase_sub(dados.classe_subclasse);
      setModalidade_taf(dados.modalidade_tarifaria);
      setTensao_nominal(dados.tensao_nominal);
      setRoteiro_leitura(dados.roteiro_leitura);
      setTp_fornecimento(dados.tp_fornecimento);
      setContratoId(dados.id);
    } catch (error) {
      return console.log(error.message);
    }
  }

  async function carregarArquivo(file) {
    if (file !== undefined) {
      const dado = new FormData();
      dado.append("file", file);
      await fetch("http://localhost:8080/contadeagua/cadastro", {
        method: "POST",
        body: dado,
      }); // rota para fazer o upload no back end
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const dado = {
      arquivo: upload,
      bandeira_tarifaria: bandeiraTarifaria,
      bandeira_tarifaria_vigente: valor_total_bandeira,
      const_mult: const_multa,
      conta_mes: conta_mes,
      data_vencimento: formatarData(data_vencimento),
      descricao_consumo: descricao_consumo,
      emissao: formatarData(emissao),
      nota_fiscal: nota_fiscal,
      num_dias_faturamento: dias_faturamento,
      numero_instalacao: numero_instalacao,
      numero_medidor: medidor,
      quantidade_kwh_mes: kwhMes,
      valor_cip_contrib_municipal: cip,
      valor_cofins: valor_cofins,
      valor_multa: multa,
      valor_pis: valor_pis,
      valor_total: Number(valor_total),
      valor_total_te: valor_total_te,
      valor_total_tusd: valor_total_tusd,
      contaenergia_contrato_id: { id: contratoId },
    };
    function formatarData(data) {
      const arrayData = data.split("/");
      const ano = `${arrayData[2]}`;
      const mes = `${arrayData[1]}`;
      const dia = `${arrayData[0]}`;

      return `${ano + "-" + mes + "-" + dia}`;
    }

    try {
      await fetch("http://localhost:8080/contadeenergia/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dado),
      });
      setCep_cliente("");
      setNota_fiscal("");
      setValor_total("");
      setNumero_instalacao("");
      setData_vencimento("");
      setConta_mes("");
      setBandeiraTarifaria("");
      setEmissao("");
      setDias_faturamento("");
      setDescricao_consumo("");
      setConst_multa("");
      setKwhMes("");
      setConcessionaria("");
      setCep_concessionaria("");
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
      setValor_total_tusd("");
      setValor_total_te("");
      setValor_total_bandeira("");
      setMulta("");
      setCip("");
      setValor_pis("");
      setValor_cofins("");
      setUpload("");
      setContratoId("");
      return;
    } catch (error) {
      return console.log(error.message);
    }
  }

  return (
    <div className="c_Energia">
      <Menu />
      <div className="container_energia">
        <h1>Cadastro de Conta de Energia</h1>
        <div className="container-dados">
          <form onSubmit={handleSubmit}>
            <h2>Dados do Contrato</h2>

            <div className="coluna">
              <TextField
                id="numero_instalacao"
                className="input"
                type="text"
                label="Nª Instalacao"
                required
                placeholder="Nª Instalacao"
                value={numero_instalacao}
                onChange={(e) => setNumero_instalacao(e.target.value)}
                onBlur={buscaContrato}
                variant="outlined"
              />

              <TextField
                id="cnpj_concessionaria"
                className="input"
                type="text"
                disabled
                label="CNPJ Concessionária"
                value={cnpj_concessionaria}
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
            </div>

            <div className="coluna">
              <TextField
                id="cep_concessionaria"
                className="input"
                type="text"
                label="CEP Concessionaria"
                value={cep_concessionaria}
                disabled
                variant="outlined"
              />

              <TextField
                id="cnpj_cpf_cliente"
                className="input"
                type="text"
                disabled
                label="CNPJ/CPF Unidade"
                placeholder="CNPJ/CPF cliente"
                value={cpf_cnpj_cliente}
                variant="outlined"
              />
              <TextField
                id="nome_cliente"
                className="input"
                type="text"
                label="Nome Unidade"
                disabled
                value={nome_cliente}
                variant="outlined"
              />
            </div>

            <div className="coluna">
              <TextField
                id="cep_cliente"
                className="input"
                type="text"
                label="CEP Unidade"
                disabled
                value={cep_cliente}
                variant="outlined"
              />

              <TextField
                id="codigo_identificador"
                type="number"
                className="input"
                disabled
                label="Código Identificador"
                value={codigo_identificador}
                variant="outlined"
              />

              <TextField
                id="codigo_fiscal"
                className="input"
                type="text"
                disabled
                label="Código Fiscal Operação"
                value={codigo_fiscal}
                variant="outlined"
              />
            </div>

            <div className="coluna">
              <TextField
                id="grupo_sub"
                className="input"
                type="text"
                disabled
                label="Grupo/Subgrupo"
                value={grupo_sub}
                variant="outlined"
              />
              <TextField
                id="classe_sub"
                className="input"
                type="text"
                label="Classe/Subclasse"
                disabled
                value={classe_sub}
                variant="outlined"
              />
              <TextField
                id="modalidade_taf"
                className="input"
                type="text"
                label="Modalidade Tarifaria"
                disabled
                value={modalidade_taf}
                variant="outlined"
              />
            </div>

            <div className="coluna">
              <TextField
                id="tensao_nominal"
                className="input"
                type="text"
                label="Tensão Nominal"
                disabled
                value={tensao_nominal}
                variant="outlined"
              />
              <TextField
                id="roteiro_leitura"
                className="input"
                type="text"
                label="Roteiro de Leitura"
                disabled
                value={roteiro_leitura}
                variant="outlined"
              />

              <TextField
                id="tp_fornecimento"
                className="input"
                type="text"
                disabled
                label="TP Fornecimencto"
                value={tp_fornecimento}
                variant="outlined"
              />
            </div>

            <h2 className="tituloSpace">Dados Conta</h2>
            <div className="coluna">
              <TextField
                id="nota_fiscal"
                className="input"
                type="text"
                label="Nota fiscal"
                placeholder="Nota fiscal"
                value={nota_fiscal}
                required={true}
                onChange={(e) => setNota_fiscal(e.target.value)}
                variant="outlined"
              />
              <NumberFormat
                prefix={"R$ "}
                id="valor_total"
                className="input"
                floatValue={true}
                value={valor_total}
                required={true}
                label="Valor total (R$)"
                placeholder="Valor total (R$)"
                customInput={TextField}
                onValueChange={(valores) => {
                  const { floatValue } = valores;
                  setValor_total(floatValue);
                }}
                variant="outlined"
              />
              <NumberFormat
                id="data_vencimento"
                className="input"
                type="text"
                required={true}
                format="##/##/####"
                mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
                value={data_vencimento}
                label="Data Vencimento"
                placeholder="Data Vencimento"
                customInput={TextField}
                onChange={(e) => setData_vencimento(e.target.value)}
                variant="outlined"
              />
            </div>

            <div className="coluna">
              <NumberFormat
                id="conta_mes"
                className="input"
                type="text"
                required={true}
                format="##/####"
                mask={["M", "M", "Y", "Y", "Y", "Y"]}
                value={conta_mes}
                label="Conta Mês"
                placeholder="Mês/Ano"
                customInput={TextField}
                onChange={(e) => setConta_mes(e.target.value)}
                variant="outlined"
              />
              <TextField
                id="bandeiraTarifaria"
                className="input"
                type="text"
                required={true}
                label="Bandeira Tarifaria"
                placeholder="Bandeira Tarifaria"
                value={bandeiraTarifaria}
                onChange={(e) => setBandeiraTarifaria(e.target.value)}
                variant="outlined"
              />
              <NumberFormat
                id="emissao"
                className="input"
                type="text"
                required={true}
                format="##/##/####"
                mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
                value={emissao}
                label="Data Emissão"
                placeholder="Data Emissão"
                customInput={TextField}
                onChange={(e) => setEmissao(e.target.value)}
                variant="outlined"
              />
            </div>

            <div className="coluna">
              <TextField
                id="dias_faturamento"
                className="input"
                type="number"
                required={true}
                label="N° Dias Faturamento"
                placeholder="N° Dias Faturamento"
                value={dias_faturamento}
                onChange={(e) => setDias_faturamento(e.target.value)}
                variant="outlined"
              />
            </div>

            <p>Descrição do Consumo</p>

            <div className="coluna">
              <TextField
                id="descricao_consumo"
                className="input"
                type="text"
                label="Descrição"
                placeholder="Descrição"
                value={descricao_consumo}
                onChange={(e) => setDescricao_consumo(e.target.value)}
                variant="outlined"
              />
              <TextField
                id="numero_medidor"
                className="input"
                type="text"
                required={true}
                label="NR medidor"
                placeholder="NR medidor"
                value={medidor}
                onChange={(e) => setMedidor(e.target.value)}
                variant="outlined"
              />
              <TextField
                id="const_multa"
                className="input"
                type="number"
                label="Const. Multa"
                placeholder="Const. Multa"
                value={const_multa}
                onChange={(e) => setConst_multa(e.target.value)}
                variant="outlined"
              />
            </div>

            <div className="coluna">
              <TextField
                id="kwhMes"
                className="input"
                type="number"
                label="Qtd Kwh Mês"
                placeholder="Qtd Kwh Mês"
                value={kwhMes}
                onChange={(e) => setKwhMes(e.target.value)}
                variant="outlined"
              />
              <NumberFormat
                id="valor_total_tusd"
                className="input"
                prefix={"R$ "}
                floatValue={true}
                value={valor_total_tusd}
                label="Valor Total TUSD"
                placeholder="R$ "
                customInput={TextField}
                onValueChange={(valores) => {
                  const { floatValue } = valores;
                  setValor_total_tusd(floatValue);
                }}
                variant="outlined"
              />
              <NumberFormat
                id="valor_total_te"
                className="input"
                prefix={"R$ "}
                floatValue={true}
                value={valor_total_te}
                label="Valor Total TE"
                placeholder="R$"
                customInput={TextField}
                onValueChange={(valores) => {
                  const { floatValue } = valores;
                  setValor_total_te(floatValue);
                }}
                variant="outlined"
              />
            </div>

            <div className="coluna">
              <NumberFormat
                id="valor_total_bandeira"
                className="input"
                prefix={"R$ "}
                floatValue={true}
                value={valor_total_bandeira}
                label="Valor Bandeira Tarifária"
                placeholder="R$ "
                customInput={TextField}
                onValueChange={(valores) => {
                  const { floatValue } = valores;
                  setValor_total_bandeira(floatValue);
                }}
                variant="outlined"
              />
            </div>

            <p>Itens Financeiros (Valores Totais)</p>

            <div className="coluna">
              <NumberFormat
                id="multa"
                className="input"
                prefix={"R$ "}
                floatValue={true}
                value={multa}
                label="Multa (R$)"
                placeholder="Multa (R$)"
                customInput={TextField}
                onValueChange={(valores) => {
                  const { floatValue } = valores;
                  setMulta(floatValue);
                }}
                variant="outlined"
              />
              <NumberFormat
                id="cip"
                className="input"
                prefix={"R$ "}
                floatValue={true}
                value={cip}
                label="CIP"
                placeholder="CIP-Contribuição Municipal (R$)"
                customInput={TextField}
                onValueChange={(valores) => {
                  const { floatValue } = valores;
                  setCip(floatValue);
                }}
                variant="outlined"
              />
            </div>

            <p>Tributos</p>

            <div className="coluna">
              <NumberFormat
                id="valor_pis"
                className="input"
                prefix={"R$ "}
                floatValue={true}
                value={valor_pis}
                label="Valor PIS"
                placeholder="R$ "
                customInput={TextField}
                onValueChange={(valores) => {
                  const { floatValue } = valores;
                  setValor_pis(floatValue);
                }}
                variant="outlined"
              />

              <NumberFormat
                id="valor_cofins"
                className="input"
                prefix={"R$ "}
                floatValue={true}
                value={valor_cofins}
                label="Valor COFINS"
                placeholder="R$ "
                customInput={TextField}
                onValueChange={(valores) => {
                  const { floatValue } = valores;
                  setValor_cofins(floatValue);
                }}
                variant="outlined"
              />
            </div>

            <div className="bt-container">
              <input
                className="btn-upload"
                id="contained-button-file"
                multiple
                type="file"
                onChange={(e) => carregarArquivo(e.target.files[0])}
              />
              <label htmlFor="contained-button-file">
                <Button
                  id="upload"
                  variant="contained"
                  color="primary"
                  component="span"
                >
                  Upload
                </Button>
              </label>
              <button type="submit" className="cadastrar" id="botao_cad">
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContaEnergia;
