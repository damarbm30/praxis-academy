import { useNavigate, Link } from "react-router-dom";
import RegisterAlert from "./RegisterAlert";

const RegisterForm = ({ userCredentials, setUserCredentials, valid, setValid, userRegistration }) => {
  const navigate = useNavigate();

  return (
    <form className="register__form" onSubmit={(e) => e.preventDefault()}>
      <RegisterAlert valid={valid} />
      <label htmlFor="username">Username</label>
      <input
        size={30}
        type="text"
        value={userCredentials.userName}
        onChange={(e) => setUserCredentials({ ...userCredentials, userName: e.target.value })}
      />
      <label htmlFor="email">Email</label>
      <input
        size={30}
        type="text"
        value={userCredentials.email}
        onChange={(e) => setUserCredentials({ ...userCredentials, email: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        size={30}
        type="text"
        value={userCredentials.password}
        onChange={(e) => {
          setUserCredentials({ ...userCredentials, password: e.target.value });
        }}
      />
      <label htmlFor="confirm-password">Confirm Password</label>
      <input
        size={30}
        type="text"
        value={userCredentials.matchPassword}
        onChange={(e) => {
          setUserCredentials({ ...userCredentials, matchPassword: e.target.value });
        }}
      />
      <div className="register__button__wrapper">
        <button
          type="submit"
          className="register__button"
          onClick={() => {
            userRegistration(userCredentials, navigate);
          }}
          disabled={!valid.email || !valid.userName || !valid.password || !valid.matchPassword ? true : false}
        >
          Register
        </button>
        <Link to={"/login"}>Already have an account?</Link>
      </div>
    </form>
  );
};

export default RegisterForm;
