const RegisterAlert = ({ valid }) => {
  return (
    <>
      <p className={!valid.userName ? "register__alert" : "hide"}>
        Username must be more than 3 characters and consists only of numbers and letters
      </p>
      <p className={!valid.email ? "register__alert" : "hide"}>Not a valid email address</p>
      <p className={!valid.password ? "register__alert" : "hide"}>
        Password must include uppercase letters, lowercase letters, a number and a special character. <br /> Allowed
        special characters: ! @ # $ * %
      </p>
      <p className={!valid.matchPassword ? "register__alert" : "hide"}>Password doesn't match</p>
    </>
  );
};

export default RegisterAlert;
