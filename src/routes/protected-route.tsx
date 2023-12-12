import { Navigate } from "react-router-dom";

interface IProps {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: IProps): JSX.Element => {
  const userCredentials = localStorage.getItem("userCredentials");

  if (userCredentials === null) {
    return <Navigate to="auth" />;
  }
  
  return children;
};
