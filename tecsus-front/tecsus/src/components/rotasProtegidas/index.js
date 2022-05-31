import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth/useAuth";

function RotasProtegidas() {
  const { token } = useAuth();
  return token === true ? <Outlet /> : <Navigate to="/login" />;
}

export default RotasProtegidas;
