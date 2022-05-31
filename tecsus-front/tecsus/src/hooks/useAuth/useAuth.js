import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useLocalStorage } from "react-use";

export function useAuth() {
  return useContext(AuthContext);
}

export function useAuthProvider() {
  const [token, setToken, removeToken] = useLocalStorage("token", null);
  const [dado, setDado, removeDado] = useLocalStorage("dados", null);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState();

  const logar = async () => {
    try {
      const response = await fetch(`http://localhost:8080/usuarios`);
      const dados = await response.json();

      const achouDados = dados.find((x) => {
        return x.email === usuario && x.senha === senha;
      });

      if (achouDados === undefined) {
        setErro(true);
        removeToken();
        removeDado();
        setUsuario("");
        setSenha("");
      } else {
        setDado(achouDados);
        setToken(true);
        setErro(false);
        setUsuario("");
        setSenha("");
      }
    } catch (error) {
      return console.log(error.message);
    }
  };

  return {
    token,
    setToken,
    removeToken,
    logar,
    usuario,
    setUsuario,
    senha,
    setSenha,
    dado,
    setDado,
    removeDado,
    erro,
    setErro,
  };
}
