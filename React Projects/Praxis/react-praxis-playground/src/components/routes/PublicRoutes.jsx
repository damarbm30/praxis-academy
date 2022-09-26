import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useIdleTimer } from "react-idle-timer";

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

  const handleIdle = () => {
    console.log("User is idle");
  };

  const idleTimer = useIdleTimer({
    timeout: 5 * 1000,
    onIdle: handleIdle,
  });

  return user ? (
    <Navigate to={"/home"} replace />
  ) : (
    <Outlet
      context={[isSent, setIsSent, showNotification, setShowNotification]}
      timeout={5 * 1000}
      onIdle={handleIdle}
    />
  );
};

export default PublicRoutes;
