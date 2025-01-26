import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <div className="sidebar">
      <button onClick={() => navigate("/students")}>Students</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Sidebar;
