import { Spin } from "antd";
import { useNavigate, Link } from "react-router-dom";

const LoginForm = ({
  userCredentials,
  setUserCredentials,
  userLogin,
  isLoading,
  setIsLoading,
  setErrMsg,
  showNotification,
  setShowNotification,
}) => {
  const navigate = useNavigate();

  return (
    <form
      className="login__form"
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
      <div className="login__footer">
        <button
          className="login__button"
          disabled={!userCredentials.user || !userCredentials.password ? true : false}
          onClick={() => {
            userLogin(userCredentials, navigate, setIsLoading, setErrMsg, showNotification, setShowNotification);
          }}
        >
          Login
        </button>
        {isLoading ? (
          <div className="login__loading">
            Please wait <Spin size="large" />
          </div>
        ) : (
          ""
        )}
        {}
        <Link to={"/register"} style={{ textAlign: "center" }}>
          Don't have an account?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
