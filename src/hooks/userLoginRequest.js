import axios from "axios";

export const userLoginRequest = async (data) => {
  try {
    const response = await axios.post(
      "http://51.195.148.112/api/admin/auth/login",
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { token } = response.data;
    localStorage.setItem("token", JSON.stringify(token));
    return true;
  } catch (error) {
    return false;
  }
};
