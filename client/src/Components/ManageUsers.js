import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import axios from "axios";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
<<<<<<< HEAD
      .get("https://botserver-production.up.railway.app/user")
=======
      .get("https://telegram-weather-bot-bntq.vercel.app/user")
>>>>>>> 0610aab56ed0f9e707fba03583bf278917167a30
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.error("Error fetching users", err);
      });
  }, []);

  const changeStatus = async (chatId, status) => {
<<<<<<< HEAD
    const res = await axios.put(
      `https://botserver-production.up.railway.app/user/${chatId}`,
      {
        status: status,
      }
    );
=======
    const res = await axios.put(`https://telegram-weather-bot-bntq.vercel.app/user/${chatId}`, {
      status: status,
    });
>>>>>>> 0610aab56ed0f9e707fba03583bf278917167a30
    console.log(res);
    window.alert(`User ${status}`);

    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.chatId === chatId) {
          return { ...user, status: status };
        }
        return user;
      })
    );
  };

  const deleteUser = async (chatId) => {
<<<<<<< HEAD
    const res = await axios.delete(
      `https://botserver-production.up.railway.app/user/${chatId}`
    );
=======
    const res = await axios.delete(`https://telegram-weather-bot-bntq.vercel.app/user/${chatId}`);
>>>>>>> 0610aab56ed0f9e707fba03583bf278917167a30
    console.log(res);
    window.alert("User deleted");

    setUsers((prevUsers) => prevUsers.filter((user) => user.chatId !== chatId));
  };

  return (
    <div>
      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={user.chatId}>
            <Card>
              <CardContent>
                <List>
                  <ListItem
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {"Name: "} {user.firstName} {"Status: "}
                      {user.status}
                    </Typography>
                  </ListItem>
                </List>
              </CardContent>
              <Divider />
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => changeStatus(user.chatId, "Active")}
                >
                  Activate User
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => changeStatus(user.chatId, "Blocked")}
                >
                  Block User
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteUser(user.chatId)}
                >
                  Delete User
                </Button>
              </CardActions>
            </Card>
            <br />
          </div>
        ))
      ) : (
        <Typography variant="subtitle1">No Subscribers</Typography>
      )}
    </div>
  );
};

export default ManageUsers;
