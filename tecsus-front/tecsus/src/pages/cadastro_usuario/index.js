import "./style.css";
import Menu from "../../components/menu";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import baseURL from "../../utils";

function CadastroUsuario() {
  const [acesso, setAcesso] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [username, setUsername] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const dado = {
      acesso: acesso,
      email: email,
      senha: senha,
      username: username,
    };

    try {
      await fetch(`${baseURL}/cadastrarusuario`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dado),
      });

      setAcesso("");
      setEmail("");
      setSenha("");
      setUsername("");

      return;
    } catch (error) {
      return console.log(error.message);
    }
  }
  return (
    <div className="cadastro_user">
      <Menu />
      <div className="containerUser">
        <h1 className="titulo">Cadastro de Usuario</h1>
        <div className="cadastro">
          <form name="cadastroConcessionaria" onSubmit={handleSubmit}>
            <div className="coluna">
              <TextField
                id="username"
                type="text"
                required
                placeholder="Nome Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                label="Username"
                variant="outlined"
                className="input"
              />
              <TextField
                id="email"
                type="email"
                required
                placeholder="teste@teste.com"
                value={email}
                label="E-mail"
                variant="outlined"
                className="input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="coluna">
              <TextField
                id="senha"
                required
                variant="outlined"
                className="input"
                type="password"
                placeholder="senha"
                label="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <FormControl variant="outlined" className="select input">
                <InputLabel id="demo-simple-select-outlined-label">
                  Nivel Usuario
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={acesso}
                  required
                  onChange={(e) => setAcesso(e.target.value)}
                  label="Nivel Usuario"
                >
                  <MenuItem value={1}>Administrador</MenuItem>
                  <MenuItem value={2}>Gestor</MenuItem>
                  <MenuItem value={3}>Digitador</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="bt-container">
              <button type="submit" className="cadastrar" id="botao_cad">
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CadastroUsuario;
