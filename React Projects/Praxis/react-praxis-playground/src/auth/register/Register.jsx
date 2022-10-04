import { useOutletContext } from "react-router-dom";
import "./register.css";
import RegisterForm from "./RegisterForm";

const Register = () => {
  const [setIsSent, showNotification, setShowNotification] = useOutletContext();

  return (
    <section className="register__container">
      <RegisterForm
        setIsSent={setIsSent}
        showNotification={showNotification}
        setShowNotification={setShowNotification}
      />
    </section>
  );
};

export default Register;
