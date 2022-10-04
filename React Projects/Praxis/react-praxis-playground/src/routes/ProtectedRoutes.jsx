import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useIdleTimer } from "react-idle-timer";
import { useRef } from "react";
import { getToken, userLogout } from "../_services";

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

  const handleIdle = async () => {
    const response = await getToken();
    if (response === 400) {
      userLogout(navigate);
      alert("You've been logged out due to another device trying to logging in");
    }
  };

  // eslint-disable-next-line
  const idleTimer = useIdleTimer({
    timeout: 10 * 1000,
    onIdle: handleIdle,
  });

  return user ? <Outlet onIdle={handleIdle} /> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoutes;
