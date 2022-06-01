import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "../../style/style";
import NumberFormat from "react-number-format";

export default function InfoContaAgua({ dados }) {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <div className={classes.campo}>
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="Numero de fornecimento"
          value={dados.contaagua_contrato_id.n_fornecimento}
          disabled
          fullWidth
          variant="outlined"
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="CNPJ Concessionaria"
          value={dados.contaagua_contrato_id.contrato_concessionaria_id.cnpj}
          fullWidth
          variant="outlined"
          disabled
        />

        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="Concessionaria"
          fullWidth
          value={dados.contaagua_contrato_id.contrato_concessionaria_id.nome}
          variant="outlined"
          disabled
        />
      </div>
      <div className={classes.campo}>
        <TextField
          id="outlined"
          className={classes.text}
          fullWidth
          type="number"
          label="CEP Concessionaria"
          value={dados.contaagua_contrato_id.contrato_concessionaria_id.cep}
          variant="outlined"
          disabled
        />

        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          fullWidth
          label="CNPJ/CPF Unidade"
          placeholder="CNPJ/CPF cliente"
          value={dados.contaagua_contrato_id.contrato_unidade_id.cpf_cnpj}
          variant="outlined"
          disabled
        />
        <TextField
          id="nome"
          fullWidth
          className={classes.text}
          type="text"
          label="Nome Unidade"
          value={dados.contaagua_contrato_id.contrato_unidade_id.nome}
          variant="outlined"
          disabled
        />
      </div>
      <div className={classes.campo}>
        <TextField
          id="cep_unidade"
          className={classes.text}
          type="text"
          label="Cep Unidade"
          value={dados.contaagua_contrato_id.contrato_unidade_id.end_cep}
          variant="outlined"
          fullWidth
          disabled
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="number"
          fullWidth
          label="Codigo do Cliente"
          value={dados.contaagua_contrato_id.codigo_cliente}
          variant="outlined"
          disabled
        />
        <TextField
          id="outlined"
          className={classes.text}
          fullWidth
          type="number"
          label="pde_rgi"
          value={dados.contaagua_contrato_id.pde_rgi}
          variant="outlined"
          disabled
        />
      </div>
      <div className={classes.campo}>
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          fullWidth
          label="Hidrometro"
          value={dados.contaagua_contrato_id.hidrometro}
          variant="outlined"
          disabled
        />
        <TextField
          id="outlined"
          className={classes.text}
          fullWidth
          type="text"
          label="Tipo de ligação"
          value={dados.tipo_ligacao}
          variant="outlined"
          disabled
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          fullWidth
          label="Segmento"
          value={
            dados.contaagua_contrato_id.contrato_concessionaria_id.segmento
          }
          variant="outlined"
          disabled
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
          value={dados.economia}
          disabled
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
          value={dados.data_apresentacao}
          disabled
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
          value={dados.proxima_leitura}
          disabled
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
          value={dados.condicao_leitura}
          disabled
          variant="outlined"
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="number"
          fullWidth
          label="Consumo m3 "
          placeholder="m3"
          value={dados.consumo_m3}
          disabled
          variant="outlined"
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="number"
          fullWidth
          label="Periodo de Consumo"
          placeholder="Periodo de Consumo"
          value={dados.periodo}
          disabled
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
          value={dados.media_consumo}
          disabled
          variant="outlined"
        />
        <NumberFormat
          id="outlined"
          className={classes.text}
          fullWidth
          prefix={"R$ "}
          floatValue={dados.true}
          value={dados.total_agua}
          label="Valor total da água"
          placeholder="R$ "
          customInput={TextField}
          variant="outlined"
        />
        <NumberFormat
          id="outlined"
          className={classes.text}
          fullWidth
          prefix={"R$ "}
          floatValue={dados.true}
          value={dados.total_esgoto}
          label="Valor total esgoto"
          placeholder="R$"
          customInput={TextField}
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <NumberFormat
          id="outlined"
          className={classes.text}
          prefix={"R$ "}
          floatValue={dados.true}
          fullWidth
          value={dados.valor_total}
          label="Valor total de Consumo"
          placeholder="R$"
          customInput={TextField}
          variant="outlined"
        />
        <NumberFormat
          id="outlined"
          className={classes.text}
          floatValue={dados.true}
          fullWidth
          prefix={"R$ "}
          value={dados.multa}
          label="Multa"
          placeholder="R$"
          customInput={TextField}
          variant="outlined"
        />
        <NumberFormat
          id="outlined"
          className={classes.text}
          fullWidth
          floatValue={dados.true}
          prefix={"R$ "}
          value={dados.at_monet}
          label="Valor tributos"
          placeholder="R$"
          customInput={TextField}
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <NumberFormat
          id="outlined"
          className={classes.text}
          fullWidth
          floatValue={dados.true}
          prefix={"R$"}
          value={dados.juros_mora}
          label="Juros Moradia"
          placeholder="R$"
          customInput={TextField}
          variant="outlined"
        />
        <NumberFormat
          id="outlined"
          fullWidth
          className={classes.text}
          floatValue={dados.true}
          prefix={"R$"}
          value={dados.taxa_regulacao}
          label="Taxa de Regulação"
          placeholder="R$"
          customInput={TextField}
          variant="outlined"
        />
        <NumberFormat
          id="outlined"
          className={classes.text}
          type="text"
          fullWidth
          format="##/##/####"
          mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
          value={dados.data_vencimento}
          label="Data Vencimento"
          placeholder="Data Vencimento"
          customInput={TextField}
          disabled
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
          value={dados.n_documento}
          disabled
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
          value={dados.data_emissao}
          disabled
          variant="outlined"
        />
      </div>
    </form>
  );
}
