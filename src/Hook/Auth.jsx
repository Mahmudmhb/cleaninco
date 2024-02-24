import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Auth = () => {
  const AuthProvider = useContext(AuthContext);
  return AuthProvider;
};

export default Auth;
