import { Outlet, Navigate } from "react-router-dom";
import { useIdleTimer } from "react-idle-timer";
import { useRef } from "react";

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
  const idleTimerRef = useRef(null);

  const handleIdle = () => {
    console.log("User is idle");
  };

  const idleTimer = useIdleTimer({
    timeout: 5 * 1000,
    onIdle: handleIdle,
  });

  return user ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoutes;
