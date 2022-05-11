import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "../../pages/quadro_cons/style";

export default function EditClientes({ dados, modalEdit }) {
  const classes = useStyles();
  const [cnpj, setCnpj] = useState(dados.cnpj)
  const [nome, setNome] = useState(dados.nome)
  const [segmento, setSegmento] = useState(dados.segmento)
  const [cep, setCep] = useState(dados.cep)
  const [rua, setRua] = useState(dados.rua)
  const [bairro, setBairro] = useState(dados.bairro)
  const [estado, setEstado] = useState(dados.uf)
  const [cidade, setCidade] = useState(dados.cidade)
  const [num_resid, setNum_resid] = useState(dados.numero)
  const [telefone, setTelefone] = useState(dados.telefone)
  const [inscricao_est, setInscricao_est] = useState(dados.inscricao_estadual)
  const [inscricao_unic, setInscricao_unic] = useState(dados.inscricao_especial)


  async function handleUpdate() {
    const data = {
      id:dados.id,
      cnpj:cnpj,
      nome:nome,
      segmento:segmento,
      cep:cep,
      rua:rua,
      bairro:bairro,
      cidade:cidade,
      uf:estado,
      numero:num_resid,
      telefone:telefone,
      inscricao_estadual:inscricao_est,
      inscricao_especial:inscricao_unic
  };
    await fetch(`http://localhost:8080/concessionaria/atualizar`, {
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
          label="CNPJ"
          variant="outlined"
          fullWidth
          onChange={(e) => setCnpj(e.target.value)}
          value={cnpj}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          type="text"
          label="Nome"
          variant="outlined"
          fullWidth
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Segmento"
          type="text"
          variant="outlined"
          fullWidth
          onChange={(e) => setSegmento(e.target.value)}
          value={segmento}
        />
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
      </div>
      <div>
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
          type="number"
          label="Numero Residencial"
          variant="outlined"
          fullWidth
          onChange={(e) => setNum_resid(e.target.value)}
          value={num_resid}
        />
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
          onChange={(e) => setInscricao_est(e.target.value)}
          value={inscricao_est}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          type="text"
          label="Incrição Espacial"
          variant="outlined"
          fullWidth
          onChange={(e) => setInscricao_unic(e.target.value)}
          value={inscricao_unic}
        />
      </div>




      <Button
        onClick={()=>handleUpdate()}
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
