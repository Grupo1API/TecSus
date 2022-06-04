import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "../../style/style";
import NumberFormat from "react-number-format";

export default function EditAgua({ dados, modalEdit }) {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <div className={classes.campo}>
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="CNPJ Concessionaria"
          value={dados.contrato_concessionaria_id.cnpj}
          fullWidth
          disabled
          variant="outlined"
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="Concessionaria"
          value={dados.contrato_concessionaria_id.nome}
          fullWidth
          disabled
          variant="outlined"
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="CNPJ/CPF Unidade"
          value={dados.contrato_unidade_id.cpf_cnpj}
          fullWidth
          disabled
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="Nome Cliente"
          value={dados.contrato_unidade_id.nome}
          fullWidth
          disabled
          variant="outlined"
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="Cod.Cliente"
          value={dados.codigo_cliente}
          fullWidth
          disabled
          variant="outlined"
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="PDE/RGI"
          value={dados.pde_rgi}
          fullWidth
          disabled
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="Hidrometro"
          value={dados.hidrometro}
          fullWidth
          disabled
          variant="outlined"
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="Tipo de Ligação"
          value={dados.tipo_ligacao}
          fullWidth
          disabled
          variant="outlined"
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="Tipo de Fornecimento"
          value={dados.tipo_fornecimento}
          fullWidth
          disabled
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="Numero de Fornecimento"
          value={dados.n_fornecimento}
          fullWidth
          disabled
          variant="outlined"
        />
        <NumberFormat
          prefix={"R$ "}
          id="outlined"
          className={classes.text}
          floatValue={true}
          value={dados.valor_medio}
          label="Valor Medio (R$)"
          customInput={TextField}
          fullWidth
          disabled
          variant="outlined"
        />
        <NumberFormat
          prefix={"R$ "}
          id="consumo medio"
          className="input"
          disabled
          floatValue={true}
          value={dados.media_consumo_m3}
          label="Consumo Médio (m³)"
          customInput={TextField}
          variant="outlined"
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="Nome Consumidor"
          value={dados.local_nome}
          fullWidth
          disabled
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="CPF/CNPJ/CI"
          value={dados.local_cnpj}
          fullWidth
          disabled
          variant="outlined"
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="CEP"
          value={dados.local_cep}
          fullWidth
          disabled
          variant="outlined"
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="Rua"
          value={dados.local_rua}
          fullWidth
          disabled
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="Bairro"
          value={dados.local_bairro}
          fullWidth
          disabled
          variant="outlined"
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="Cidade"
          value={dados.local_cidade}
          fullWidth
          disabled
          variant="outlined"
        />
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="Estado"
          value={dados.local_estado}
          fullWidth
          disabled
          variant="outlined"
        />
      </div>
      <div className={classes.campo}>
        <TextField
          id="outlined"
          className={classes.text}
          type="text"
          label="Nª Residencial/Empresarial"
          value={dados.local_numero}
          fullWidth
          disabled
          variant="outlined"
        />
      </div>
    </form>
  );
}
