import React from "react";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LogoutButton = () => {
  const navigate = useNavigate(); // Initialize navigate
  const handleLogout = () => {
    googleLogout();
    console.log("pressed");
    navigate("/"); // Use navigate to go to the root path
  };

  return (
    <>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default LogoutButton;
