import React, { useState } from "react";

import axios from "axios";


const authenticateToken = async (token)=>{
    try{
        const res = await axios.get(`https://api.telegram.org/bot${token}/getMe`)
        console.log(res.data)
        return res.data
    }catch(err){
        console.error("Error:", err);
    return null; // Handle the error gracefully
    }
}

const updateToken = async (token) =>{
    const res = await axios.put(`http://localhost:8000/bot/${token}`) 
    console.log(res)
}

const ManageBotSettings = () => {
  const [telgramBotToken, setTelegramBotToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Process the user's input here, e.g., send it to the server or perform some action
    console.log("User input:", telgramBotToken);
    const res = await authenticateToken(telgramBotToken)
    console.log(res)
    if (res) {
        if (res.ok === true) {
            console.log("Bot information:", res);
            await updateToken(telgramBotToken)
            console.log("Restart bot server for changes to be applied")
        }
      }
    else{
        console.log("telegram bot token is invalid , generate new token and try again")
      }

  };


  return (
    <div>
      <p>MANAGE bot</p>
      <form onSubmit={handleSubmit}>
        <label>
          Enter new token:
          <input
            type="text"
            value={telgramBotToken}
            onChange={(e) => setTelegramBotToken(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ManageBotSettings;
