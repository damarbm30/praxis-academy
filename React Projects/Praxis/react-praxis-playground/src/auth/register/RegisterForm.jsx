import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import RegisterAlert from "./RegisterAlert";
import { userRegistration } from "../../_services";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,}$/;
const EMAIL_REGEX = /^[a-z0-9]+@[a-z]+\.[a-z]{3}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[*!@#$%]).{8,24}$/;

const RegisterForm = ({ setIsSent, showNotification, setShowNotification }) => {
  const navigate = useNavigate();

  const [userCredentials, setUserCredentials] = useState({ userName: "", email: "", password: "", matchPassword: "" });
  const [valid, setValid] = useState({ userName: false, email: false, password: false, matchPassword: false });
  const [focus, setFocus] = useState({ userName: false, email: false, password: false, matchPassword: false });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const result = USER_REGEX.test(userCredentials.userName);
    setValid((prevState) => ({ ...prevState, userName: result }));
  }, [userCredentials.userName]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(userCredentials.email);
    setValid((prevState) => ({ ...prevState, email: result }));
  }, [userCredentials.email]);

  useEffect(() => {
    const result = PWD_REGEX.test(userCredentials.password);
    setValid((prevState) => ({ ...prevState, password: result }));
  }, [userCredentials.password]);

  useEffect(() => {
    let match = false;
    if (userCredentials.matchPassword === userCredentials.password && userCredentials.matchPassword !== "") {
      match = true;
    }
    setValid((prevState) => ({ ...prevState, matchPassword: match }));
  }, [userCredentials.matchPassword, userCredentials.password]);

  return (
    <form className="register__form" onSubmit={(e) => e.preventDefault()}>
      <RegisterAlert valid={valid} focus={focus} />
      <label htmlFor="username">Username</label>
      <input
        size={30}
        type="text"
        value={userCredentials.userName}
        placeholder={"Input username here"}
        required
        onChange={(e) => setUserCredentials({ ...userCredentials, userName: e.target.value })}
        onFocus={() => setFocus({ ...focus, userName: true })}
        onBlur={() => setFocus({ ...focus, userName: false })}
      />
      <label htmlFor="email">Email</label>
      <input
        size={30}
        type="text"
        value={userCredentials.email}
        placeholder={"Input email here"}
        required
        onChange={(e) => setUserCredentials({ ...userCredentials, email: e.target.value })}
        onFocus={() => setFocus({ ...focus, email: true })}
        onBlur={() => setFocus({ ...focus, email: false })}
      />
      <label htmlFor="password">Password</label>
      <input
        size={30}
        type="text"
        value={userCredentials.password}
        placeholder={"Input password here"}
        required
        onChange={(e) => {
          setUserCredentials({ ...userCredentials, password: e.target.value });
        }}
        onFocus={() => setFocus({ ...focus, password: true })}
        onBlur={() => setFocus({ ...focus, password: false })}
      />
      <label htmlFor="confirm-password">Confirm Password</label>
      <input
        size={30}
        type="text"
        value={userCredentials.matchPassword}
        placeholder={"Input password confirmation here"}
        required
        onChange={(e) => {
          setUserCredentials({ ...userCredentials, matchPassword: e.target.value });
        }}
        onFocus={() => setFocus({ ...focus, matchPassword: true })}
        onBlur={() => setFocus({ ...focus, matchPassword: false })}
      />
      <div className="register__footer">
        <button
          type="submit"
          className="register__button"
          onClick={() => {
            userRegistration(userCredentials, navigate, setIsSent, setIsLoading, showNotification, setShowNotification);
          }}
          disabled={!valid.email || !valid.userName || !valid.password || !valid.matchPassword ? true : false}
        >
          Register
        </button>
        {isLoading ? (
          <div className="register__loading">
            Please wait <Spin size="large" />
          </div>
        ) : (
          ""
        )}
        <Link to={"/login"} style={{ textAlign: "center" }}>
          Already have an account?
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
