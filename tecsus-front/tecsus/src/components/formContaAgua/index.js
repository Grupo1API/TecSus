import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "../../style/style";
import NumberFormat from "react-number-format";
import baseURL from "../../utils";

export default function EditContaAgua({ dados, modalEdit }) {
  const classes = useStyles();
  const n_fornecimento = dados.contaagua_contrato_id.n_fornecimento;
  const cnpj_concessionaria =
    dados.contaagua_contrato_id.contrato_concessionaria_id.cnpj;
  const concessionaria =
    dados.contaagua_contrato_id.contrato_concessionaria_id.nome;
  const segmento =
    dados.contaagua_contrato_id.contrato_concessionaria_id.segmento;
  const cpf_cnpj_cliente =
    dados.contaagua_contrato_id.contrato_unidade_id.cpf_cnpj;
  const nome_cliente = dados.contaagua_contrato_id.contrato_unidade_id.nome;
  const cepConcessionaria =
    dados.contaagua_contrato_id.contrato_concessionaria_id.cep;
  const [documento, setDocumento] = useState(dados.n_documento);
  const [data_emissao, setData_Emissao] = useState(dados.data_emissao);
  const codigo_cliente = dados.contaagua_contrato_id.codigo_cliente;
  const pde_rgi = dados.contaagua_contrato_id.pde_rgi;
  const hidrometro = dados.contaagua_contrato_id.hidrometro;

  const [economia, setEconomia] = useState(
    dados.contaagua_contrato_id.tipo_fornecimento
  );
  const tipo_ligacao = dados.contaagua_contrato_id.tipo_ligacao;
  const cep_unidade = dados.contaagua_contrato_id.contrato_unidade_id.end_cep;
  const [data_apresentacao, setData_apresentacao] = useState(
    dados.data_apresentacao
  );
  const [proxima_leitura, setProxima_leitura] = useState(dados.proxima_leitura);
  const [condicao_leitura, setCondicao_leitura] = useState(
    dados.condicao_leitura
  );
  const [consumo_m3, setConsumo_m3] = useState(dados.consumo_m3);
  const [periodo_consumo, setPeriodo_consumo] = useState(dados.periodo);
  const [media_consumo, setMedia_consumo] = useState(dados.media_consumo);
  const [total_agua, setTotal_agua] = useState(dados.total_agua);
  const [total_esgoto, setTotal_esgoto] = useState(dados.total_esgoto);
  const [valor_total, setValor_total] = useState(dados.valor_total);
  const [multa, setMulta] = useState(dados.multa);
  const [at_monet, setAt_monet] = useState(dados.at_monet);
  const [juros_mora, setJuros_mora] = useState(dados.juros_mora);
  const [taxa_regulacao, setTaxa_regulacao] = useState(dados.taxa_regulacao);
  const [data_vencimento, setData_vencimento] = useState(dados.data_vencimento);

  async function handleUpdate() {
    const data = {
      n_documento: documento,
      data_apresentacao: data_apresentacao,
      data_emissao: data_emissao,
      data_vencimento: data_vencimento,
      economia: economia,
      proxima_leitura: proxima_leitura,
      condicao_leitura: condicao_leitura,
      consumo_m3: consumo_m3,
      periodo_consumo: periodo_consumo,
      media_consumo: media_consumo,
      total_agua: total_agua,
      total_esgoto: total_esgoto,
      valor_total: valor_total,
      multa: multa,
      at_monet: at_monet,
      juros_mora: juros_mora,
      taxa_regulacao: taxa_regulacao,
    };
    await fetch(`${baseURL}/contadeagua/atualizar`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  return (
    <form className={classes.root} onSubmit={handleUpdate}>
      <div className={classes.campo}>
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          disabled
          label="Numero de fornecimento"
          value={n_fornecimento}
          fullWidth
          variant="outlined"
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="CNPJ Concessionaria"
          value={cnpj_concessionaria}
          fullWidth
          disabled
          variant="outlined"
        />

        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="Concessionaria"
          fullWidth
          disabled
          value={concessionaria}
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <TextField
          id="outlined"
          className={classes.text}
          fullWidth
          type="number"
          disabled
          label="CEP Concessionaria"
          value={cepConcessionaria}
          variant="outlined"
        />

        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          fullWidth
          disabled
          label="CNPJ/CPF Unidade"
          placeholder="CNPJ/CPF cliente"
          value={cpf_cnpj_cliente}
          variant="outlined"
        />
        <TextField
          id="nome"
          fullWidth
          className={classes.text}
          type="text"
          disabled
          label="Nome Unidade"
          value={nome_cliente}
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <TextField
          id="cep_unidade"
          className={classes.text}
          type="text"
          disabled
          label="Cep Unidade"
          value={cep_unidade}
          variant="outlined"
          fullWidth
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="number"
          fullWidth
          disabled
          label="Codigo do Cliente"
          value={codigo_cliente}
          variant="outlined"
        />
        <TextField
          id="outlined"
          className={classes.text}
          fullWidth
          disabled
          type="number"
          label="pde_rgi"
          value={pde_rgi}
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          disabled
          fullWidth
          label="Hidrometro"
          value={hidrometro}
          variant="outlined"
        />
        <TextField
          id="outlined"
          className={classes.text}
          fullWidth
          type="text"
          label="Tipo de ligação"
          value={tipo_ligacao}
          disabled
          variant="outlined"
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          fullWidth
          label="Segmento"
          disabled
          value={segmento}
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          fullWidth
          label="Economia"
          placeholder="Economia"
          value={economia}
          onChange={(e) => setEconomia(e.target.value)}
          variant="outlined"
        />
        <NumberFormat
          id="outlined"
          className={classes.text}
          type="text"
          fullWidth
          format="##/##/####"
          mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
          label="Data Apresentação"
          placeholder="Data Apresentação"
          customInput={TextField}
          value={data_apresentacao}
          onChange={(e) => setData_apresentacao(e.target.value)}
          variant="outlined"
        />
        <NumberFormat
          id="outlineda"
          className={classes.text}
          type="text"
          fullWidth
          format="##/##/####"
          mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
          label="Proxima leitura"
          customInput={TextField}
          value={proxima_leitura}
          onChange={(e) => setProxima_leitura(e.target.value)}
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <TextField
          id="outlined"
          className={classes.text}
          fullWidth
          type="text"
          label="Condição Leitura"
          placeholder="Condição Leitura"
          value={condicao_leitura}
          onChange={(e) => setCondicao_leitura(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="number"
          fullWidth
          label="Consumo m3 "
          placeholder="m3"
          value={consumo_m3}
          onChange={(e) => setConsumo_m3(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="number"
          fullWidth
          label="Periodo de Consumo"
          placeholder="Periodo de Consumo"
          value={periodo_consumo}
          onChange={(e) => setPeriodo_consumo(e.target.value)}
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <TextField
          id="outlined"
          className={classes.text}
          type="number"
          label="Media de Consumo"
          placeholder="Media de Consumo"
          fullWidth
          value={media_consumo}
          onChange={(e) => setMedia_consumo(e.target.value)}
          variant="outlined"
        />
        <NumberFormat
          id="outlined"
          className={classes.text}
          fullWidth
          prefix={"R$ "}
          floatValue={true}
          value={total_agua}
          label="Valor total da água"
          placeholder="R$ "
          customInput={TextField}
          onValueChange={(valores) => {
            const { floatValue } = valores;
            setTotal_agua(floatValue);
          }}
          variant="outlined"
        />
        <NumberFormat
          id="outlined"
          className={classes.text}
          fullWidth
          prefix={"R$ "}
          floatValue={true}
          value={total_esgoto}
          label="Valor total esgoto"
          placeholder="R$"
          customInput={TextField}
          onValueChange={(valores) => {
            const { floatValue } = valores;
            setTotal_esgoto(floatValue);
          }}
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <NumberFormat
          id="outlined"
          className={classes.text}
          prefix={"R$ "}
          floatValue={true}
          fullWidth
          value={valor_total}
          label="Valor total de Consumo"
          placeholder="R$"
          customInput={TextField}
          onValueChange={(valores) => {
            const { floatValue } = valores;
            setValor_total(floatValue);
          }}
          variant="outlined"
        />
        <NumberFormat
          id="outlined"
          className={classes.text}
          floatValue={true}
          fullWidth
          prefix={"R$ "}
          value={multa}
          label="Multa"
          placeholder="R$"
          customInput={TextField}
          onValueChange={(valores) => {
            const { floatValue } = valores;
            setMulta(floatValue);
          }}
          variant="outlined"
        />
        <NumberFormat
          id="outlined"
          className={classes.text}
          fullWidth
          floatValue={true}
          prefix={"R$ "}
          value={at_monet}
          label="Valor tributos"
          placeholder="R$"
          customInput={TextField}
          onValueChange={(valores) => {
            const { floatValue } = valores;
            setAt_monet(floatValue);
          }}
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <NumberFormat
          id="outlined"
          className={classes.text}
          fullWidth
          floatValue={true}
          prefix={"R$"}
          value={juros_mora}
          label="Juros Moradia"
          placeholder="R$"
          customInput={TextField}
          onValueChange={(valores) => {
            const { floatValue } = valores;
            setJuros_mora(floatValue);
          }}
          variant="outlined"
        />
        <NumberFormat
          id="outlined"
          fullWidth
          className={classes.text}
          floatValue={true}
          prefix={"R$"}
          value={taxa_regulacao}
          label="Taxa de Regulação"
          placeholder="R$"
          customInput={TextField}
          onValueChange={(valores) => {
            const { floatValue } = valores;
            setTaxa_regulacao(floatValue);
          }}
          variant="outlined"
        />
        <NumberFormat
          id="outlined"
          className={classes.text}
          type="text"
          fullWidth
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
      <div className={classes.campo}>
        <TextField
          id="outlined"
          fullWidth
          className={classes.text}
          type="number"
          label="Nª do Documento"
          placeholder="Nª do Documento"
          value={documento}
          onChange={(e) => setDocumento(e.target.value)}
          variant="outlined"
        />
        <NumberFormat
          id="outlined"
          className={classes.text}
          fullWidth
          type="text"
          format="##/##/####"
          mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
          label="Data Emissão"
          placeholder="Data Emissão"
          customInput={TextField}
          value={data_emissao}
          onChange={(e) => setData_Emissao(e.target.value)}
          variant="outlined"
        />
      </div>

      <Button
        onClick={() => handleUpdate()}
        type="Submit"
        fullWidth
        variant="contained"
        color="primary"
        size="large"
      >
        EDITAR
      </Button>
    </form>
  );
}
