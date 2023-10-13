import React from "react";
import LogoutButton from "./Logout";
import ManageBotSettings from "./ManageBot";
import ManageUsers from "./ManageUsers";


const Dashboard = () =>{
    return (
        <div>
            <p>Dashboard</p>
        <LogoutButton/>
        <div>
            <p>Update bot settings</p>
            <ManageBotSettings/>
        </div>
        <div>
            <p>Manage Users</p>
            <ManageUsers/>
        </div>
        </div>
    )
}

export default Dashboard