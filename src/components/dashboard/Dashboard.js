import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import { userAddData } from "../../hooks/userAddData";
import { userDeleteData } from "../../hooks/userDeleteData";
import "./Dashboard.css";

const Dashboard = () => {
  const [userAdd, setUserAdd] = useState({});

  //dom
  const navigate = useNavigate();
  //custom hooks
  const [getData, setGetData] = useFetchData();

  //user defined function
  const handleUpdate = (u_id) => {
    navigate(`/update/${u_id}`);
  };

  const handleDelete = async (u_id) => {
    localStorage.setItem("id", u_id);
    const deleteAcknow = await userDeleteData();
    if (deleteAcknow.success) {
      alert(deleteAcknow.message);
      setGetData((prevData) => [...prevData]);

      localStorage.removeItem("id");
    } else {
      console.log(deleteAcknow);
    }
  };

  const handleAdd = async (event) => {
    event.preventDefault();
    const acknow = await userAddData(userAdd);
    if (acknow.success) {
      alert(acknow.message);
      setGetData((prevData) => [...prevData, userAdd]);
    } else {
      console.log(acknow);
    }
  };
  return (
    <div className="dashboard-container">
      <h2>Product</h2>
      <br />
      {getData.map((value, index) => (
        <div key={index}>
          <li>{value.name}</li>
          <button onClick={() => handleUpdate(value.id)}>Update</button> &nbsp;
          <button onClick={() => handleDelete(value.id)}>Delete</button>
          <br />
          <br />
        </div>
      ))}
      <br />
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Enter name for add"
          name="name"
          onChange={(e) => setUserAdd({ ...userAdd, name: e.target.value })}
          required
        />
        &nbsp;
        <button>Add</button>
      </form>
    </div>
  );
};

export default Dashboard;
