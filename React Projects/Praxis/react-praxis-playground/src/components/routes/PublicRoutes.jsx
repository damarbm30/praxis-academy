import { useState } from "react";
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
  const [isSent, setIsSent] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const user = isAuth();

  return user ? (
    <Navigate to={"/home"} replace />
  ) : (
    <Outlet context={[isSent, setIsSent, showNotification, setShowNotification]} />
  );
};

export default PublicRoutes;
