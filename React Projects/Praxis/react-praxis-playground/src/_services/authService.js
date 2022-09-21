import axios from "axios";

const BASE_PATH = "https://nodejs-backend-api-playground.herokuapp.com";

export const userRegistration = async (payload, navigate) => {
  try {
    // eslint-disable-next-line
    const results = await axios.post(`${BASE_PATH}/auth/user/registration`, payload);
    navigate("/login");
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (payload, navigate) => {
  try {
    const results = await axios.post(`${BASE_PATH}/auth/user/login`, payload);
    const token = await axios.get(`${BASE_PATH}/auth/generate/accessToken`, {
      headers: {
        Authorization: `Bearer ${results.data.refreshToken}`,
      },
    });

    const userCredentials = {
      ...results.data,
      accessToken: token.data,
    };

    console.log(token.data);
    console.log(results.data.refreshToken);

    localStorage.setItem("userCredentials", JSON.stringify(userCredentials));
    navigate("/home");
  } catch (error) {
    console.log(error.response.data);
  }
};

export const userLogout = (navigate) => {
  localStorage.removeItem("userCredentials");
  navigate("/login");
};
