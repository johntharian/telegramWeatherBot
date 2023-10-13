import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Paper, Divider } from "@mui/material";

import LogoutButton from "./Logout";
import ManageBotSettings from "./ManageBot";
import ManageUsers from "./ManageUsers";

const dashboardStyles = {
  background: "#f2f2f2",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const contentStyles = {
  padding: "20px",
  textAlign: "center",
};

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the user from localStorage
    const userFromLocalStorage = localStorage.getItem("user");
    if (userFromLocalStorage) {
      setUser(userFromLocalStorage);
    }
  }, []);

  return (
    <div style={dashboardStyles}>
      <div style={contentStyles}>
        {user ? (
          <>
            <Typography variant="h3" gutterBottom>
              Welcome {user}
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h3" gutterBottom>
              Welcome to Weather Bot Admin Pane
            </Typography>
          </>
        )}
        <p>Dashboard</p>
      </div>
      <LogoutButton />

      <Divider variant="middle" />

      <div style={contentStyles}>
        <Typography variant="h5" gutterBottom>
          Update Bot Settings
        </Typography>
        <ManageBotSettings />
      </div>

      <Divider variant="middle" />
      

      <div style={contentStyles}>
        <Typography variant="h5" gutterBottom>
          Manage Subscribers
        </Typography>
        <ManageUsers />
      </div>
    </div>
  );
};

export default Dashboard;
