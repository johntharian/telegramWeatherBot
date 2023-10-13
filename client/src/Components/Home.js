import { useState, useEffect } from "react";
import { Container, Typography, Button, Paper } from "@mui/material";
import jwt_decode from "jwt-decode";
import { Link, Navigate } from "react-router-dom";

import Login from "./Login";
import LogoutButton from "./Logout";

const styles = {
  body: {
    background: '#f2f2f2', // Set your preferred background color here
    margin: 0, // Remove any default margin to fill the entire viewport
    minHeight: '100vh', // Makes sure the page fills the entire viewport height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    padding: '16px',
    textAlign: 'center',
  },
};
const Home = () => {
  const [credentialResponse, setCredentialResponse] = useState(null);
  const [user, setUser] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (credentialResponse !== null) {
      var decoded = jwt_decode(credentialResponse.credential);
      console.log(decoded);
      setUser(decoded.name);
    }
  }, [credentialResponse]);

  if (user) {
    console.log(user);
  }

  return (
    <div style={styles.body}>
      {user === null ? (
        <div>
          <Container maxWidth="sm">
            <Paper elevation={3} style={styles.paper}>
              <Typography variant="h4" gutterBottom>
                Welcome to Weather Bot Admin Panel
              </Typography>
              <Typography variant="subtitle1">
                Please login to access the dashboard.
              </Typography>
              <Login setCredentialResponse={setCredentialResponse} />
            </Paper>
          </Container>
        </div>
      ) : (
        <div>
          {localStorage.setItem('user', user)}
          <Navigate to="/dashboard" />
        </div>
      )}
    </div>
  );
};

export default Home;
