import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRegistration } from "../../../_services";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({ userName: "", email: "", password: "" });

  return (
    <section className="register__container">
      <form className="register__form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="username">Username</label>
        <input
          size={20}
          type="text"
          value={userCredentials.userName}
          onChange={(e) => setUserCredentials({ ...userCredentials, userName: e.target.value })}
        />
        <label htmlFor="email">Email</label>
        <input
          size={20}
          type="text"
          value={userCredentials.email}
          onChange={(e) => setUserCredentials({ ...userCredentials, email: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          size={20}
          type="text"
          value={userCredentials.password}
          onChange={(e) => setUserCredentials({ ...userCredentials, password: e.target.value })}
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input size={20} type="text" />
        <div className="register__button__wrapper">
          <button
            type="submit"
            className="register__button"
            onClick={() => {
              userRegistration(userCredentials, navigate);
            }}
          >
            Register
          </button>
          <Link to={"/login"}>Already have an account?</Link>
        </div>
      </form>
    </section>
  );
};

export default Register;
