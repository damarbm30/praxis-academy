import { Spin } from "antd";
import { useNavigate, Link } from "react-router-dom";
import RegisterAlert from "./RegisterAlert";

const RegisterForm = ({
  userRegistration,
  userCredentials,
  setUserCredentials,
  isValid,
  focus,
  setFocus,
  isSent,
  setIsSent,
  isLoading,
  setIsLoading,
  setShowNotification,
}) => {
  const navigate = useNavigate();

  return (
    <form className="register__form" onSubmit={(e) => e.preventDefault()}>
      <RegisterAlert isValid={isValid} focus={focus} />
      <label htmlFor="username">Username</label>
      <input
        size={30}
        type="text"
        value={userCredentials.userName}
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
            userRegistration(userCredentials, navigate, setIsSent, setIsLoading, setShowNotification);
          }}
          disabled={!isValid.email || !isValid.userName || !isValid.password || !isValid.matchPassword ? true : false}
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
