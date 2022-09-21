import React, { useEffect } from "react";
import { useState } from "react";
import { userRegistration } from "../../../_services";
import "./register.css";
import RegisterForm from "./RegisterForm";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,}$/;
const EMAIL_REGEX = /^[a-z0-9]+@[a-z]+\.[a-z]{3}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[*!@#$%]).{8,24}$/;

const Register = () => {
  const [userCredentials, setUserCredentials] = useState({ userName: "", email: "", password: "", matchPassword: "" });
  const [valid, setValid] = useState({ userName: false, email: false, password: false, matchPassword: false });

  useEffect(() => {
    const result = USER_REGEX.test(userCredentials.userName);
    setValid({ ...valid, userName: result });
    // eslint-disable-next-line
  }, [userCredentials.userName]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(userCredentials.email);
    setValid({ ...valid, email: result });
    // eslint-disable-next-line
  }, [userCredentials.email]);

  useEffect(() => {
    const result = PWD_REGEX.test(userCredentials.password);
    setValid({ ...valid, password: result });
    // eslint-disable-next-line
  }, [userCredentials.password]);

  useEffect(() => {
    let match = false;
    if (userCredentials.matchPassword === userCredentials.password && userCredentials.matchPassword !== "") {
      match = true;
    }
    setValid({ ...valid, matchPassword: match });
    // eslint-disable-next-line
  }, [userCredentials.matchPassword]);

  return (
    <section className="register__container">
      <RegisterForm
        userCredentials={userCredentials}
        setUserCredentials={setUserCredentials}
        valid={valid}
        setValid={setValid}
        userRegistration={userRegistration}
      />
    </section>
  );
};

export default Register;
