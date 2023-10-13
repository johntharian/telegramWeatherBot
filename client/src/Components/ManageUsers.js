import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("");
  const [chatId, setchatId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/user")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("error fetching users", err);
      });
  }, []);

  const changeStatus = async(chatId) =>{
    const res = await axios.put(`http://localhost:8000/user/${chatId}`,{status:"blocked"})
    console.log(res)
    alert('user blocked');
  }

  const deleteUser = async(chatId) =>{
    const res = await axios.delete(`http://localhost:8000/user/${chatId}`)
    console.log(res)
    alert('user deleted');

    setUsers((prevUsers) => prevUsers.filter((user) => user.chatId !== chatId));
  }

  return (
    <div>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.chatId}>
              {user.firstName} - {user.status}
              <button onClick={() => changeStatus(user.chatId)}>Change Status</button>
              <button onClick={() => deleteUser(user.chatId)}>deleteUser</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users</p>
      )}
    </div>
  );
};

export default ManageUsers;
