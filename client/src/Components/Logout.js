import React from "react";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Button from "@mui/material/Button";


const LogoutButton = () => {
  const navigate = useNavigate(); // Initialize navigate
  const handleLogout = () => {
    googleLogout();
    console.log("pressed");
    localStorage.removeItem("user");
    navigate("/"); // Use navigate to go to the root path
  };

  return (
    <>
      <div>
        <Button
          // variant="contained"
          color="error"
          onClick={handleLogout}
          style={{
            borderRadius: "50px", // Makes the button more rounded
            fontWeight: "bold", // Makes the text bold
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)", // Adds a subtle shadow
          }}
        >
          Logout
        </Button>
      </div>
    </>
  );
};

export default LogoutButton;
