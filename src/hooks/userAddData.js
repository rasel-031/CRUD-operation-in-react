import axios from "axios";

export const userAddData = async (data) => {
  try {
    const response = await axios.post(
      "http://51.195.148.112/api/admin/product-type/",
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
