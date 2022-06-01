import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "../../style/style";

export default function InfoUnidade({ dados }) {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <div className={classes.campo}>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Nome"
          variant="outlined"
          fullWidth
          disabled
          value={dados.nome}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="CPF/CNPJ"
          variant="outlined"
          fullWidth
          disabled
          value={dados.cpf_cnpj}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          type="number"
          label="Telefone"
          variant="outlined"
          fullWidth
          disabled
          value={dados.telefone}
        />
      </div>
      <div className={classes.campo}>
        <TextField
          className={classes.text}
          required
          id="outlined-password-input"
          type="email"
          label="Email"
          variant="outlined"
          fullWidth
          disabled
          value={dados.email}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="CEP"
          variant="outlined"
          fullWidth
          disabled
          value={dados.end_cep}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Rua"
          variant="outlined"
          fullWidth
          disabled
          value={dados.end_rua}
        />
      </div>
      <div className={classes.campo}>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Bairro"
          variant="outlined"
          fullWidth
          disabled
          value={dados.end_bairro}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Estado"
          variant="outlined"
          fullWidth
          disabled
          value={dados.end_uf}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Cidade"
          variant="outlined"
          fullWidth
          disabled
          value={dados.end_cidade}
        />
      </div>
      <div className={classes.campo}>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          type="number"
          label="Numero Residencial"
          variant="outlined"
          fullWidth
          disabled
          value={dados.end_numero}
        />
      </div>
    </form>
  );
}
