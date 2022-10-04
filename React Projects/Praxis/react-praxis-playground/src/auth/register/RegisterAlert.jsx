import { CloseOutlined } from "@ant-design/icons";

const RegisterAlert = ({ valid, focus }) => {
  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <div className={focus.userName && !valid.userName ? "register__alert" : "hide"}>
          <p>
            <CloseOutlined style={{ color: "red", marginRight: "4px" }} />
            Username must be more than 3 characters
          </p>
        </div>
        <div className={focus.email && !valid.email ? "register__alert" : "hide"}>
          <p>
            <CloseOutlined style={{ color: "red", marginRight: "4px" }} />
            Not a valid email address
          </p>
        </div>
        <div className={focus.password && !valid.password ? "register__alert" : "hide"}>
          <p>
            <CloseOutlined style={{ color: "red", marginRight: "4px" }} />
            Password must include uppercase letters, lowercase letters, a number and a special character. Allowed
            special characters: ! @ # $ * %
          </p>
        </div>
        <div className={focus.matchPassword && !valid.matchPassword ? "register__alert" : "hide"}>
          <p>
            <CloseOutlined style={{ color: "red", marginRight: "4px" }} />
            Password doesn't match
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterAlert;
