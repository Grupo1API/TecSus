import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "../../pages/quadro_unidades/style";

export default function EditClientes({ dados, modalEdit }) {
  const classes = useStyles();
  const [nome, setNome] = useState(dados.nome)
  const [cpf_cnpj, setCpf_cnpj] = useState(dados.cpf_cnpj)
  const [telefone, setTelefone] = useState(dados.telefone)
  const [email, setEmail] = useState(dados.email)
  const [cep, setCep] = useState(dados.end_cep)
  const [rua, setRua] = useState(dados.end_rua)
  const [bairro, setBairro] = useState(dados.end_bairro)
  const [estado, setEstado] = useState(dados.end_uf)
  const [cidade, setCidade] = useState(dados.end_cidade)
  const [num_resid, setNum_resid] = useState(dados.end_numero)
 

  async function handleUpdate() {
    const data = {
      id:dados.id,
      nome:nome, 
      cpf_cnpj:cpf_cnpj, 
      telefone:telefone, 
      email:email, 
      end_cep:cep, 
      end_rua:rua, 
      end_bairro:bairro, 
      end_uf:estado, 
      end_cidade:cidade, 
      end_numero:num_resid, 
  };
    await fetch(`http://localhost:8080/unidade/atualizar`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  return (
    <form className={classes.root} onSubmit={handleUpdate}>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Nome"
          variant="outlined"
          fullWidth
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="CPF/CNPJ"
          variant="outlined"
          fullWidth
          onChange={(e) => setCpf_cnpj(e.target.value)}
          value={cpf_cnpj}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          type="number"
          label="Telefone"
          variant="outlined"
          fullWidth
          onChange={(e) => setTelefone(e.target.value)}
          value={telefone}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-password-input"
          type="email"
          label="Email"
          variant="outlined"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="CEP"
          variant="outlined"
          fullWidth
          onChange={(e) => setCep(e.target.value)}
          value={cep}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Rua"
          variant="outlined"
          fullWidth
          onChange={(e) => setRua(e.target.value)}
          value={rua}
        />
      </div>
      
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Bairro"
          variant="outlined"
          fullWidth
          onChange={(e) => setBairro(e.target.value)}
          value={bairro}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Estado"
          variant="outlined"
          fullWidth
          onChange={(e) => setEstado(e.target.value)}
          value={estado}
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
          onChange={(e) => setCidade(e.target.value)}
          value={cidade}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          type="number"
          label="Numero Residencial"
          variant="outlined"
          fullWidth
          onChange={(e) => setNum_resid(e.target.value)}
          value={num_resid}
        />
      </div>
      <Button
        //onClick={()=>handleUpdate()}
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
