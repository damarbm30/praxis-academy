import { Outlet, Navigate } from "react-router-dom";

const isAuth = () => {
  const user = localStorage.getItem("userCredentials");

  if (!user) {
    return false;
  } else {
    return true;
  }
};

const PublicRoutes = () => {
  const user = isAuth();

  return user ? <Navigate to={"/home"} replace /> : <Outlet />;
};

export default PublicRoutes;
