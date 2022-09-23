import axios from "axios";

const BASE_PATH = "https://nodejs-backend-api-playground.herokuapp.com";

export const userRegistration = async (payload, navigate, setIsSent, setIsLoading, setShowNotification) => {
  try {
    setShowNotification(true);
    // eslint-disable-next-line
    setIsSent(true);
    setIsLoading(true);
    const results = await axios.post(`${BASE_PATH}/auth/user/registration`, payload);
    navigate("/login");
    setIsLoading(false);
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (payload, navigate, setIsLoading, setErrMsg, setShowNotification) => {
  try {
    setIsLoading(true);
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

    localStorage.setItem("userCredentials", JSON.stringify(userCredentials));
    navigate("/home");
    setIsLoading(false);
  } catch (error) {
    setShowNotification(true);
    setErrMsg(error.response.data.message);
  }
};

export const userLogout = (navigate) => {
  localStorage.removeItem("userCredentials");
  navigate("/login");
};
