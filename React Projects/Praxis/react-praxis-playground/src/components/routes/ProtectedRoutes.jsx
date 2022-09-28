import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useIdleTimer } from "react-idle-timer";
import { useRef } from "react";
import { userLogout } from "../../_services/authService";

const isAuth = () => {
  const user = localStorage.getItem("userCredentials");

  if (!user) {
    return false;
  } else {
    return true;
  }
};

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const user = isAuth();
  // eslint-disable-next-line
  const idleTimerRef = useRef(null);

  const handleIdle = () => {
    userLogout(navigate);
    alert("You'll be logged out for being idle for too long");
  };

  // eslint-disable-next-line
  const idleTimer = useIdleTimer({
    timeout: 5 * 1000 * 60,
    onIdle: handleIdle,
  });

  return user ? <Outlet onIdle={handleIdle} /> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoutes;
