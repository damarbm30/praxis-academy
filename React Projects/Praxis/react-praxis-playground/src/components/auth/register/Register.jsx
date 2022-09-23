import React, { useEffect } from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { userRegistration } from "../../../_services";
import "./register.css";
import RegisterForm from "./RegisterForm";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,}$/;
const EMAIL_REGEX = /^[a-z0-9]+@[a-z]+\.[a-z]{3}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[*!@#$%]).{8,24}$/;

const Register = () => {
  const [userCredentials, setUserCredentials] = useState({ userName: "", email: "", password: "", matchPassword: "" });
  const [isValid, setIsValid] = useState({ userName: false, email: false, password: false, matchPassword: false });
  const [focus, setFocus] = useState({ userName: false, email: false, password: false, matchPassword: false });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent, setShowNotification] = useOutletContext();

  useEffect(() => {
    const result = USER_REGEX.test(userCredentials.userName);
    setIsValid({ ...isValid, userName: result });
    // eslint-disable-next-line
  }, [userCredentials.userName]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(userCredentials.email);
    setIsValid({ ...isValid, email: result });
    // eslint-disable-next-line
  }, [userCredentials.email]);

  useEffect(() => {
    const result = PWD_REGEX.test(userCredentials.password);
    setIsValid({ ...isValid, password: result });
    // eslint-disable-next-line
  }, [userCredentials.password]);

  useEffect(() => {
    let match = false;
    if (userCredentials.matchPassword === userCredentials.password && userCredentials.matchPassword !== "") {
      match = true;
    }
    setIsValid({ ...isValid, matchPassword: match });
    // eslint-disable-next-line
  }, [userCredentials.matchPassword]);

  return (
    <section className="register__container">
      <RegisterForm
        userRegistration={userRegistration}
        userCredentials={userCredentials}
        setUserCredentials={setUserCredentials}
        isValid={isValid}
        setIsValid={setIsValid}
        focus={focus}
        setFocus={setFocus}
        isSent={isSent}
        setIsSent={setIsSent}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setShowNotification={setShowNotification}
      />
    </section>
  );
};

export default Register;
