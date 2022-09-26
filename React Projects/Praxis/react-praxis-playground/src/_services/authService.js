import axios from "axios";

const BASE_PATH = "https://nodejs-backend-api-playground.herokuapp.com";

export const userRegistration = async (
  payload,
  navigate,
  setIsSent,
  setIsLoading,
  showNotification,
  setShowNotification
) => {
  try {
    setShowNotification(true);
    setIsSent(true);
    setIsLoading(true);
    // eslint-disable-next-line
    const results = await axios.post(`${BASE_PATH}/auth/user/registration`, payload);
    navigate("/login");
    setIsLoading(false);
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (payload, navigate, setIsLoading, setErrMsg, showNotification, setShowNotification) => {
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

    console.log(results.data);
    localStorage.setItem("userCredentials", JSON.stringify(userCredentials));
    navigate("/home");
    setIsLoading(false);
  } catch (error) {
    if (error.response?.status === 503) {
      setErrMsg("Service not available 503");
    } else {
      setErrMsg(error.response.data.message);
    }
    setShowNotification(true);
  }
};

export const userLogout = (navigate) => {
  localStorage.removeItem("userCredentials");
  navigate("/login");
};
