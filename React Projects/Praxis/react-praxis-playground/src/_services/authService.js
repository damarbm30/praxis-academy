import axios from "axios";

const BASE_PATH = "https://nodejs-backend-api-playground.herokuapp.com";

export const userRegistration = async (payload, navigate) => {
  try {
    const results = await axios.post(`${BASE_PATH}/auth/user/registration`, payload);
    localStorage.setItem("userName", results.data.data.userName);
    console.log(results.data.data.userName);
    navigate("/home");
  } catch (error) {
    console.log(error);
  }
};
