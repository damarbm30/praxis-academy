import { Outlet, Navigate } from "react-router-dom";

const isAuth = () => {
  const user = localStorage.getItem("userCredentials");

  if (!user) {
    return false;
  } else {
    return true;
  }
};

const ProtectedRoutes = () => {
  const user = isAuth();

  return user ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoutes;
