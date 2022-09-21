import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../../_services";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({ user: "", password: "" });

  return (
    <section className="login__container">
      <form
        className="login__wrapper"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          size={20}
          placeholder="Input username or email"
          value={userCredentials.user}
          onChange={(e) => {
            setUserCredentials({ ...userCredentials, user: e.target.value });
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Input password"
          value={userCredentials.password}
          onChange={(e) => {
            setUserCredentials({ ...userCredentials, password: e.target.value });
          }}
        />
        <div className="login__button__wrapper">
          <button
            onClick={() => {
              userLogin(userCredentials, navigate);
            }}
          >
            Login
          </button>
          <Link to={"/register"}>Don't have an account?</Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
