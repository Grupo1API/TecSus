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

  const logar = async () => {
    console.log("entrei");
    try {
      const response = await fetch(`http://localhost:8080/usuarios`);
      const dados = await response.json();

      const achouDados = dados.find((x) => {
        return x.email === usuario && x.senha === senha;
      });

      if (achouDados !== undefined) {
        setDado(achouDados);
        setToken(true);
      }
    } catch (error) {
      removeToken();
      removeDado();
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
  };
}
