import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchData = (newValue) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "http://51.195.148.112/api/admin/product-type/",
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      setProduct(response.data.data);
    };
    getData();
  }, [newValue]);

  return product;
};
