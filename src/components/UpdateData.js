import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userUpdateData } from "../hooks/userUpdateData";
import "./Global.css";
import { useParams } from "react-router-dom";

const UpdateData = () => {
  const { id } = useParams();
  const [userUpdate, setUserUpdate] = useState({ id: id });
  const navigate = useNavigate();

  //user define function
  const handleUpdate = async (event) => {
    event.preventDefault();
    const updateAcknow = await userUpdateData(userUpdate);
    if (updateAcknow.success) {
      alert(updateAcknow.message);
      navigate("/dashboard");
    } else {
      console.log(updateAcknow);
    }
  };

  return (
    <div className="update-container">
      <h2>Update</h2>
      <br />
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Enter name for update"
          onChange={(e) =>
            setUserUpdate({ ...userUpdate, name: e.target.value })
          }
          required
        />
        &nbsp;
        <button className="update_button">Update</button>
      </form>
    </div>
  );
};

export default UpdateData;
