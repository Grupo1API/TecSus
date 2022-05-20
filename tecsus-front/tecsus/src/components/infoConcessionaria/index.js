import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "../quadro_concessionaria/style";

export default function InfoConcessionaria({ dados}) {
  const classes = useStyles();

  return (
    <form className={classes.root} >
      <div>
        <TextField
          className={classes.text}       
          id="outlined"
          type="text"
          label="Nome"
          variant="outlined"
          fullWidth
          disabled
          value={dados.nome}
        />
        <TextField
          className={classes.text}        
          id="outlined"
          label="CNPJ"
          variant="outlined"
          fullWidth
          disabled
          value={dados.cnpj}
        />
        
      </div>
      <div>
        <TextField
          className={classes.text} 
          id="outlined"
          label="Segmento"
          type="text"
          variant="outlined"
          fullWidth
          disabled
          value={dados.segmento}
        />
        <TextField
          className={classes.text}
          id="outlined"
          label="CEP"
          variant="outlined"
          fullWidth
          disabled
          value={dados.cep}
        />
      </div>
      <div>
      <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Rua"
          variant="outlined"
          fullWidth
          disabled
          value={dados.rua}
        />
         <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Bairro"
          variant="outlined"
          fullWidth
          disabled
          value={dados.bairro}
        />
      </div>
      
      <div>
      <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Cidade"
          variant="outlined"
          fullWidth
          disabled
          value={dados.cidade}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Estado"
          variant="outlined"
          fullWidth
          disabled
          value={dados.uf}
        />
      </div>
      <div>
      <TextField
          className={classes.text}
          required
          id="outlined-required"
          type="number"
          label="Numero Residencial"
          variant="outlined"
          fullWidth
          disabled
          value={dados.numero}
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
      <div>
      <TextField
          className={classes.text}
          required
          id="outlined-required"
          type="number"
          label="Incrição Estadual"
          variant="outlined"
          fullWidth
          disabled
          value={dados.inscricao_estadual}
        />
        <TextField
          className={classes.text}        
          id="outlined"
          type="text"
          label="Incrição Especial"
          variant="outlined"
          fullWidth
          disabled
          value={dados.inscricao_especial}
        />
      </div>
    </form>
  );
}
