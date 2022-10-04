import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "./login.css";
import LoginForm from "./LoginForm";
import Notification from "../../components/Notification";

const Login = () => {
  const [errMsg, setErrMsg] = useState("Error");
  const [isSent, setIsSent, showNotification, setShowNotification] = useOutletContext();

  const toggleShow = () => {
    setShowNotification(false);
  };

  return (
    <section className="login__container">
      <LoginForm setErrMsg={setErrMsg} showNotification={showNotification} setShowNotification={setShowNotification} />
      {showNotification ? (
        <Notification isSent={isSent} setIsSent={setIsSent} errMsg={errMsg} toggleShow={toggleShow} />
      ) : (
        ""
      )}
    </section>
  );
};

export default Login;
