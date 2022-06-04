import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "../../style/style";
import NumberFormat from "react-number-format";

export default function EditEnergia({ dados }) {
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <div className={classes.campo}>
        <TextField
          className={classes.text}
          id="outlined"
          label="CNPJ concessionaria"
          variant="outlined"
          fullWidth
          disabled
          value={dados.contrato_concessionaria_id.cnpj}
        />
        <TextField
          className={classes.text}
          id="outlined"
          label="Concessionaria"
          variant="outlined"
          fullWidth
          disabled
          value={dados.contrato_concessionaria_id.nome}
        />
        <TextField
          className={classes.text}
          id="outlined"
          type="number"
          label="CNPJ/CPF Unidade"
          variant="outlined"
          fullWidth
          disabled
          value={dados.contrato_unidade_id.cpf_cnpj}
        />
      </div>
      <div className={classes.campo}>
        <TextField
          className={classes.text}
          id="outlined-password-input"
          type="text"
          label="Nome Unidade"
          variant="outlined"
          fullWidth
          disabled
          value={dados.contrato_unidade_id.nome}
        />
        <TextField
          className={classes.text}
          id="outlined"
          label="codigo Identificador"
          variant="outlined"
          fullWidth
          disabled
          value={dados.codigo_identificador}
        />
        <TextField
          className={classes.text}
          id="outlined"
          label="Codigo Fiscal"
          variant="outlined"
          fullWidth
          disabled
          value={dados.codigo_fiscal_operacao}
        />
      </div>
      <div className={classes.campo}>
        <TextField
          className={classes.text}
          id="outlined"
          label="Grupo/Subgrupo"
          variant="outlined"
          fullWidth
          disabled
          value={dados.grupo_subgrupo}
        />
        <TextField
          className={classes.text}
          id="outlined"
          label="Classe/Subclasse"
          variant="outlined"
          fullWidth
          disabled
          value={dados.classe_subclasse}
        />
        <TextField
          className={classes.text}
          id="outlined"
          label="TP Fornecimento"
          variant="outlined"
          fullWidth
          disabled
          value={dados.tp_fornecimento}
        />
      </div>
      <div className={classes.campo}>
        <TextField
          className={classes.text}
          id="outlined"
          type="text"
          label="Modalidade Tarifaria"
          variant="outlined"
          fullWidth
          disabled
          value={dados.modalidade_tarifaria}
        />
        <TextField
          className={classes.text}
          id="outlined"
          label="Tensao Nominal"
          variant="outlined"
          fullWidth
          disabled
          value={dados.tensao_nominal}
        />
        <TextField
          className={classes.text}
          id="outlined"
          type="text"
          label="Roteiro Leitura"
          variant="outlined"
          fullWidth
          disabled
          value={dados.roteiro_leitura}
        />
      </div>
      <div className={classes.campo}>
        <TextField
          className={classes.text}
          id="outlined"
          label="Nª Medidor"
          variant="outlined"
          fullWidth
          disabled
          value={dados.num_medidor}
        />
        <NumberFormat
          prefix={"R$ "}
          id="outlined"
          className={classes.text}
          floatValue={true}
          disabled
          value={dados.valor_medio}
          label="Valor Medio (R$)"
          customInput={TextField}
          fullWidth
          variant="outlined"
        />
        <NumberFormat
          
          id="consumo medio"
          className="input"
          required={true}
          floatValue={true}
          value={dados.media_consumo_kwm}
          label="Consumo Médio (Kwh)"
          customInput={TextField}
          variant="outlined"
        /> 
        <TextField
          className={classes.text}
          id="outlined"
          label="Endereço Eletrico"
          variant="outlined"
          fullWidth
          disabled
          value={dados.endereco_eletrico}
        />
      </div>
      <div className={classes.campo}>
        <TextField
          className={classes.text}
          id="outlined"
          type="text"
          label="CPF/CNPJ/CI"
          variant="outlined"
          fullWidth
          disabled
          value={dados.cnpj_cpf_ci}
        />
        <TextField
          className={classes.text}
          id="outlined"
          label="Cep Consumo"
          variant="outlined"
          fullWidth
          disabled
          value={dados.local_cep}
        />
        <TextField
          className={classes.text}
          id="outlined"
          type="text"
          label="Rua"
          variant="outlined"
          fullWidth
          disabled
          value={dados.local_rua}
        />
      </div>
      <div className={classes.campo}>
        <TextField
          className={classes.text}
          id="outlined"
          label="Bairro Consumo"
          variant="outlined"
          fullWidth
          disabled
          value={dados.local_bairro}
        />
        <TextField
          className={classes.text}
          id="outlined"
          type="text"
          label="Cidade Consumo"
          variant="outlined"
          fullWidth
          disabled
          value={dados.local_cidade}
        />
        <TextField
          className={classes.text}
          id="outlined"
          label="Estado Consumo"
          variant="outlined"
          fullWidth
          disabled
          value={dados.local_estado}
        />
      </div>
      <div className={classes.campo}>
        <TextField
          className={classes.text}
          id="outlined"
          type="text"
          label="Nª Residencial/Empresarial"
          variant="outlined"
          fullWidth
          disabled
          value={dados.local_numero}
        />
      </div>
    </form>
  );
}
