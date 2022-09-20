import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <section className="login__container">
      <form className="login__wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" size={20} />
        <label htmlFor="password">Password</label>
        <input type="text" />
        <div className="login__button__wrapper">
          <button>Login</button>
          <Link to={"/register"}>Don't have an account?</Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
