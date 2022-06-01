import NumberFormat from "react-number-format";
import TextField from "@material-ui/core/TextField";
import useStyles from "../../style/style";

export default function InfoContaEnergia({ dados }) {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <div className={classes.campo}>
        <TextField
          id="numero_instalacao"
          className={classes.text}
          type="text"
          disabled
          label="Nª Instalacao"
          placeholder="Nª Instalacao"
          value={dados.contaenergia_contrato_id.numeroInstalacao}
          variant="outlined"
        />

        <TextField
          id="cnpj_concessionaria"
          className={classes.text}
          type="text"
          disabled
          label="CNPJ Concessionária"
          value={dados.contaenergia_contrato_id.contrato_concessionaria_id.cnpj}
          variant="outlined"
        />
        <TextField
          id="concessionaria"
          className={classes.text}
          type="text"
          disabled
          label="Concessionária"
          value={dados.contaenergia_contrato_id.contrato_concessionaria_id.nome}
          variant="outlined"
        />
      </div>

      <div className={classes.campo}>
        <TextField
          id="cep_concessionaria"
          className={classes.text}
          type="text"
          label="CEP Concessionaria"
          value={dados.contaenergia_contrato_id.contrato_concessionaria_id.cep}
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
          value={dados.contaenergia_contrato_id.contrato_unidade_id.cpf_cnpj}
          variant="outlined"
        />
        <TextField
          id="nome_cliente"
          className={classes.text}
          type="text"
          label="Nome Unidade"
          disabled
          value={dados.contaenergia_contrato_id.contrato_unidade_id.nome}
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
          value={dados.contaenergia_contrato_id.contrato_unidade_id.end_cep}
          variant="outlined"
        />

        <TextField
          id="codigo_identificador"
          type="number"
          className={classes.text}
          disabled
          label="Código Identificador"
          value={dados.contaenergia_contrato_id.codigo_identificador}
          variant="outlined"
        />

        <TextField
          id="codigo_fiscal"
          className={classes.text}
          type="text"
          disabled
          label="Código Fiscal Operação"
          value={dados.contaenergia_contrato_id.codigo_fiscal_operacao}
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
          value={dados.contaenergia_contrato_id.grupo_subgrupo}
          variant="outlined"
        />
        <TextField
          id="classe_sub"
          className={classes.text}
          type="text"
          label="Classe/Subclasse"
          disabled
          value={dados.contaenergia_contrato_id.classe_subclasse}
          variant="outlined"
        />
        <TextField
          id="modalidade_taf"
          className={classes.text}
          type="text"
          label="Modalidade Tarifaria"
          disabled
          value={dados.contaenergia_contrato_id.modalidade_tarifaria}
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
          value={dados.contaenergia_contrato_id.tensao_nominal}
          variant="outlined"
        />
        <TextField
          id="roteiro_leitura"
          className={classes.text}
          type="text"
          label="Roteiro de Leitura"
          disabled
          value={dados.contaenergia_contrato_id.roteiro_leitura}
          variant="outlined"
        />

        <TextField
          id="tp_fornecimento"
          className={classes.text}
          type="text"
          disabled
          label="TP Fornecimencto"
          value={dados.contaenergia_contrato_id.tp_fornecimento}
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <TextField
          id="nota_fiscal"
          className={classes.text}
          type="text"
          disabled
          label="Nota fiscal"
          placeholder="Nota fiscal"
          value={dados.nota_fiscal}
          variant="outlined"
        />
        <NumberFormat
          prefix={"R$ "}
          id="valor_total"
          className={classes.text}
          floatValue={dados.true}
          value={dados.valor_total}
          disabled
          label="Valor total (R$)"
          placeholder="Valor total (R$)"
          customInput={TextField}
          variant="outlined"
        />
        <NumberFormat
          id="data_vencimento"
          className={classes.text}
          type="text"
          disabled
          format="##/##/####"
          mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
          value={dados.data_vencimento}
          label="Data Vencimento"
          placeholder="Data Vencimento"
          customInput={TextField}
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <NumberFormat
          id="conta_mes"
          className={classes.text}
          type="text"
          disabled
          format="##/####"
          mask={["M", "M", "Y", "Y", "Y", "Y"]}
          value={dados.conta_mes}
          label="Conta Mês"
          placeholder="Mês/Ano"
          customInput={TextField}
          variant="outlined"
        />
        <TextField
          id="bandeiraTarifaria"
          className={classes.text}
          type="text"
          disabled
          label="Bandeira Tarifaria"
          placeholder="Bandeira Tarifaria"
          value={dados.bandeira_tarifaria}
          variant="outlined"
        />
        <NumberFormat
          id="emissao"
          className={classes.text}
          type="text"
          disabled
          format="##/##/####"
          mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
          value={dados.emissao}
          label="Data Emissão"
          placeholder="Data Emissão"
          customInput={TextField}
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <TextField
          id="dias_faturamento"
          className={classes.text}
          type="number"
          disabled
          label="N° Dias Faturamento"
          placeholder="N° Dias Faturamento"
          value={dados.num_dias_faturamento}
          variant="outlined"
        />
        <TextField
          id="descricao_consumo"
          className={classes.text}
          type="text"
          disabled
          label="Descrição"
          placeholder="Descrição"
          value={dados.descricao_consumo}
          variant="outlined"
        />
        <TextField
          id="numero_medidor"
          className={classes.text}
          type="text"
          disabled
          label="NR medidor"
          placeholder="NR medidor"
          value={dados.numero_medidor}
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <TextField
          id="const_multa"
          className={classes.text}
          type="number"
          disabled
          label="Const. Multa"
          placeholder="Const. Multa"
          value={dados.const_mult}
          variant="outlined"
        />
        <TextField
          id="kwhMes"
          className={classes.text}
          type="number"
          disabled
          label="Qtd Kwh Mês"
          placeholder="Qtd Kwh Mês"
          value={dados.quantidade_kwh_mes}
          variant="outlined"
        />
        <NumberFormat
          id="valor_total_tusd"
          className={classes.text}
          disabled
          prefix={"R$ "}
          floatValue={dados.true}
          value={dados.valor_total_tusd}
          label="Valor Total TUSD"
          placeholder="R$ "
          customInput={TextField}
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <NumberFormat
          id="valor_total_te"
          className={classes.text}
          disabled
          prefix={"R$ "}
          floatValue={dados.true}
          value={dados.valor_total_te}
          label="Valor Total TE"
          placeholder="R$"
          customInput={TextField}
          variant="outlined"
        />
        <NumberFormat
          id="valor_total_bandeira"
          className={classes.text}
          disabled
          prefix={"R$ "}
          floatValue={dados.true}
          value={dados.bandeira_tarifaria_vigente}
          label="Valor Bandeira Tarifária"
          placeholder="R$ "
          customInput={TextField}
          variant="outlined"
        />
        <NumberFormat
          id="multa"
          className={classes.text}
          disabled
          prefix={"R$ "}
          floatValue={dados.true}
          value={dados.const_mult}
          label="Multa (R$)"
          placeholder="Multa (R$)"
          customInput={TextField}
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <NumberFormat
          id="cip"
          className={classes.text}
          disabled
          prefix={"R$ "}
          floatValue={dados.true}
          value={dados.valor_cip_contrib_municipal}
          label="CIP"
          placeholder="CIP-Contribuição Municipal (R$)"
          customInput={TextField}
          variant="outlined"
        />
        <NumberFormat
          id="valor_pis"
          className={classes.text}
          disabled
          prefix={"R$ "}
          floatValue={dados.true}
          value={dados.valor_pis}
          label="Valor PIS"
          placeholder="R$ "
          customInput={TextField}
          variant="outlined"
        />
        <NumberFormat
          id="valor_cofins"
          className={classes.text}
          disabled
          prefix={"R$ "}
          floatValue={dados.true}
          value={dados.valor_cofins}
          label="Valor COFINS"
          placeholder="R$ "
          customInput={TextField}
          variant="outlined"
        />
      </div>
    </form>
  );
}
