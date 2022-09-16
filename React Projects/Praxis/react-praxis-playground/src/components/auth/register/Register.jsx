import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section>
      <h1>Register</h1>
      <Link to={"/login"}>Already have an account</Link>
    </section>
  );
};

export default Register;
