import { useNavigate } from "react-router-dom";
import { userLogout } from "../../../_services";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <button className="logout-button" onClick={() => userLogout(navigate)}>
        Logout
      </button>
    </div>
  );
};

export default Home;
