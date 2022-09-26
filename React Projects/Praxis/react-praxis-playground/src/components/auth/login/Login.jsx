import React from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { userLogin } from "../../../_services";
import "./login.css";
import LoginForm from "./LoginForm";
import Notification from "./Notification";

const Login = () => {
  const [userCredentials, setUserCredentials] = useState({ user: "", password: "" });
  const [errMsg, setErrMsg] = useState("Error");
  const [isSent, setIsSent, showNotification, setShowNotification] = useOutletContext();
  const [isLoading, setIsLoading] = useState(false);

  const toggleShow = () => {
    setShowNotification(false);
  };

  return (
    <section className="login__container">
      <LoginForm
        userCredentials={userCredentials}
        setUserCredentials={setUserCredentials}
        userLogin={userLogin}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setErrMsg={setErrMsg}
        showNotification={showNotification}
        setShowNotification={setShowNotification}
      />
      {showNotification ? (
        <Notification isSent={isSent} setIsSent={setIsSent} errMsg={errMsg} toggleShow={toggleShow} />
      ) : (
        ""
      )}
    </section>
  );
};

export default Login;
