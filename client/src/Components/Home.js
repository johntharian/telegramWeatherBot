import { useState, useEffect } from "react";

import jwt_decode from "jwt-decode";
import { Link, Navigate } from "react-router-dom";

import Login from "./Login";
import LogoutButton from "./Logout";

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
    <>
      {user === null ? (
        <div>
          <p>Welcome to bot admin panel. Please login to continue.</p>
          <Login setCredentialResponse={setCredentialResponse} />
        </div>
      ) : (
        <div>
          <p>User logged in</p>
          <LogoutButton />
          <Navigate to="/dashboard" /> {/* Redirect to another page */}
        </div>
      )}
    </>
  );
};

export default Home;
