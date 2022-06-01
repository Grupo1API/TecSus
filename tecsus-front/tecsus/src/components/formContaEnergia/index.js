import { useState } from "react";
import NumberFormat from "react-number-format";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "../../style/style";

export default function EditContaEnergia({ dados, modalEdit }) {
  const classes = useStyles();

  const numero_instalacao = dados.contaenergia_contrato_id.numeroInstalacao;
  const cnpj_concessionaria =
    dados.contaenergia_contrato_id.contrato_concessionaria_id.cnpj;
  const concessionaria =
    dados.contaenergia_contrato_id.contrato_concessionaria_id.nome;
  const cep_concessionaria =
    dados.contaenergia_contrato_id.contrato_concessionaria_id.cep;
  const cpf_cnpj_cliente =
    dados.contaenergia_contrato_id.contrato_unidade_id.cpf_cnpj;
  const nome_cliente = dados.contaenergia_contrato_id.contrato_unidade_id.nome;
  const cep_cliente =
    dados.contaenergia_contrato_id.contrato_unidade_id.end_cep;
  const codigo_identificador =
    dados.contaenergia_contrato_id.codigo_identificador;
  const codigo_fiscal = dados.contaenergia_contrato_id.codigo_fiscal_operacao;
  const grupo_sub = dados.contaenergia_contrato_id.grupo_subgrupo;
  const classe_sub = dados.contaenergia_contrato_id.classe_subclasse;
  const modalidade_taf = dados.contaenergia_contrato_id.modalidade_tarifaria;
  const tensao_nominal = dados.contaenergia_contrato_id.tensao_nominal;
  const roteiro_leitura = dados.contaenergia_contrato_id.roteiro_leitura;
  const tp_fornecimento = dados.contaenergia_contrato_id.tp_fornecimento;

  const [nota_fiscal, setNota_fiscal] = useState(dados.nota_fiscal);
  const [valor_total, setValor_total] = useState(dados.valor_total);
  const [data_vencimento, setData_vencimento] = useState(dados.data_vencimento);
  const [conta_mes, setConta_mes] = useState(dados.conta_mes);
  const [bandeiraTarifaria, setBandeiraTarifaria] = useState(
    dados.bandeira_tarifaria
  );
  const [emissao, setEmissao] = useState(dados.emissao);
  const [dias_faturamento, setDias_faturamento] = useState(
    dados.num_dias_faturamento
  );
  const [descricao_consumo, setDescricao_consumo] = useState(
    dados.descricao_consumo
  );
  const [const_multa, setConst_multa] = useState(dados.const_mult);
  const [kwhMes, setKwhMes] = useState(dados.quantidade_kwh_mes);
  const [medidor, setMedidor] = useState(dados.numero_medidor);
  const [valor_total_tusd, setValor_total_tusd] = useState(
    dados.valor_total_tusd
  );
  const [valor_total_te, setValor_total_te] = useState(dados.valor_total_te);
  const [valor_total_bandeira, setValor_total_bandeira] = useState(
    dados.bandeira_tarifaria_vigente
  );
  const [multa, setMulta] = useState(dados.const_mult);
  const [cip, setCip] = useState(dados.valor_cip_contrib_municipal);
  const [valor_pis, setValor_pis] = useState(dados.valor_pis);
  const [valor_cofins, setValor_cofins] = useState(dados.valor_cofins);

  async function handleUpdate() {
    const data = {
      bandeira_tarifaria: bandeiraTarifaria,
      bandeira_tarifaria_vigente: valor_total_bandeira,
      const_mult: const_multa,
      conta_mes: conta_mes,
      data_vencimento: data_vencimento,
      descricao_consumo: descricao_consumo,
      emissao: emissao,
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
    };
    await fetch(`http://localhost:8080/contadeenergia/atualizar`, {
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
          id="numero_instalacao"
          className={classes.text}
          type="text"
          required={true}
          label="Nª Instalacao"
          placeholder="Nª Instalacao"
          value={numero_instalacao}
          disabled
          variant="outlined"
        />

        <TextField
          id="cnpj_concessionaria"
          className={classes.text}
          type="text"
          disabled
          label="CNPJ Concessionária"
          value={cnpj_concessionaria}
          variant="outlined"
        />
        <TextField
          id="concessionaria"
          className={classes.text}
          type="text"
          disabled
          label="Concessionária"
          value={concessionaria}
          variant="outlined"
        />
      </div>

      <div className={classes.campo}>
        <TextField
          id="cep_concessionaria"
          className={classes.text}
          type="text"
          label="CEP Concessionaria"
          value={cep_concessionaria}
          disabled
          variant="outlined"
        />

        <TextField
          id="cnpj_cpf_cliente"
          className={classes.text}
          type="text"
          disabled
          label="CNPJ/CPF Unidade"
          placeholder="CNPJ/CPF cliente"
          value={cpf_cnpj_cliente}
          variant="outlined"
        />
        <TextField
          id="nome_cliente"
          className={classes.text}
          type="text"
          label="Nome Unidade"
          disabled
          value={nome_cliente}
          variant="outlined"
        />
      </div>

      <div className={classes.campo}>
        <TextField
          id="cep_cliente"
          className={classes.text}
          type="text"
          label="CEP Unidade"
          disabled
          value={cep_cliente}
          variant="outlined"
        />

        <TextField
          id="codigo_identificador"
          type="number"
          className={classes.text}
          disabled
          label="Código Identificador"
          value={codigo_identificador}
          variant="outlined"
        />

        <TextField
          id="codigo_fiscal"
          className={classes.text}
          type="text"
          disabled
          label="Código Fiscal Operação"
          value={codigo_fiscal}
          variant="outlined"
        />
      </div>

      <div className={classes.campo}>
        <TextField
          id="grupo_sub"
          className={classes.text}
          type="text"
          disabled
          label="Grupo/Subgrupo"
          value={grupo_sub}
          variant="outlined"
        />
        <TextField
          id="classe_sub"
          className={classes.text}
          type="text"
          label="Classe/Subclasse"
          disabled
          value={classe_sub}
          variant="outlined"
        />
        <TextField
          id="modalidade_taf"
          className={classes.text}
          type="text"
          label="Modalidade Tarifaria"
          disabled
          value={modalidade_taf}
          variant="outlined"
        />
      </div>

      <div className={classes.campo}>
        <TextField
          id="tensao_nominal"
          className={classes.text}
          type="text"
          label="Tensão Nominal"
          disabled
          value={tensao_nominal}
          variant="outlined"
        />
        <TextField
          id="roteiro_leitura"
          className={classes.text}
          type="text"
          label="Roteiro de Leitura"
          disabled
          value={roteiro_leitura}
          variant="outlined"
        />

        <TextField
          id="tp_fornecimento"
          className={classes.text}
          type="text"
          disabled
          label="TP Fornecimencto"
          value={tp_fornecimento}
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <TextField
          id="nota_fiscal"
          className={classes.text}
          type="text"
          required={true}
          label="Nota fiscal"
          placeholder="Nota fiscal"
          value={nota_fiscal}
          onChange={(e) => setNota_fiscal(e.target.value)}
          variant="outlined"
        />
        <NumberFormat
          prefix={"R$ "}
          id="valor_total"
          className={classes.text}
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
          className={classes.text}
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
      <div className={classes.campo}>
        <NumberFormat
          id="conta_mes"
          className={classes.text}
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
          className={classes.text}
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
          className={classes.text}
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
      <div className={classes.campo}>
        <TextField
          id="dias_faturamento"
          className={classes.text}
          type="number"
          required={true}
          label="N° Dias Faturamento"
          placeholder="N° Dias Faturamento"
          value={dias_faturamento}
          onChange={(e) => setDias_faturamento(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="descricao_consumo"
          className={classes.text}
          type="text"
          required={true}
          label="Descrição"
          placeholder="Descrição"
          value={descricao_consumo}
          onChange={(e) => setDescricao_consumo(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="numero_medidor"
          className={classes.text}
          type="text"
          required={true}
          label="NR medidor"
          placeholder="NR medidor"
          value={medidor}
          onChange={(e) => setMedidor(e.target.value)}
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <TextField
          id="const_multa"
          className={classes.text}
          type="number"
          required={true}
          label="Const. Multa"
          placeholder="Const. Multa"
          value={const_multa}
          onChange={(e) => setConst_multa(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="kwhMes"
          className={classes.text}
          type="number"
          required={true}
          label="Qtd Kwh Mês"
          placeholder="Qtd Kwh Mês"
          value={kwhMes}
          onChange={(e) => setKwhMes(e.target.value)}
          variant="outlined"
        />
        <NumberFormat
          id="valor_total_tusd"
          className={classes.text}
          required={true}
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
      </div>
      <div className={classes.campo}>
        <NumberFormat
          id="valor_total_te"
          className={classes.text}
          required={true}
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
        <NumberFormat
          id="valor_total_bandeira"
          className={classes.text}
          required={true}
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
        <NumberFormat
          id="multa"
          className={classes.text}
          required={true}
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
      </div>
      <div className={classes.campo}>
        <NumberFormat
          id="cip"
          className={classes.text}
          required={true}
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
        <NumberFormat
          id="valor_pis"
          className={classes.text}
          required={true}
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
          className={classes.text}
          required={true}
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
