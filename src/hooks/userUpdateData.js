import axios from "axios";

export const userUpdateData = async (data) => {
  try {
    const response = await axios.patch(
      `http://51.195.148.112/api/admin/product-type/${data.id}`,
      JSON.stringify({ name: data.name }),
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
