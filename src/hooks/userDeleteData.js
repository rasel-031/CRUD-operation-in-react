import axios from "axios";

export const userDeleteData = async () => {
  try {
    const response = await axios.delete(
      `http://51.195.148.112/api/admin/product-type/${localStorage.getItem(
        "id"
      )}`,
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
