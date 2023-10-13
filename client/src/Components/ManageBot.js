import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import axios from "axios";

const authenticateToken = async (token) => {
  try {
    const res = await axios.get(`https://api.telegram.org/bot${token}/getMe`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.error("Error:", err);
    return null; // Handle the error gracefully
  }
};

const updateToken = async (token) => {
  const res = await axios.put(
    `https://botserver-production.up.railway.app/bot/${token}`
  );
  console.log(res);
};

const ManageBotSettings = () => {
  const [telgramBotToken, setTelegramBotToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Process the user's input here, e.g., send it to the server or perform some action
    console.log("User input:", telgramBotToken);
    const res = await authenticateToken(telgramBotToken);
    console.log(res);
    if (res) {
      if (res.ok === true) {
        console.log("Bot information:", res);
        await updateToken(telgramBotToken);
        console.log("Restart bot server for changes to be applied");
        window.alert(
          "Bot token updated. Please restart the bot server for changes to take effect."
        );
      }
    } else {
      console.log(
        "telegram bot token is invalid, generate a new token and try again"
      );
      window.alert(
        "Invalid telegram bot token. Please generate a new token and try again."
      );
      return <Alert severity="error">Enter valid api token</Alert>;
    }
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Manage the bot
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2}>
          <TextField
            id="token-input"
            label="Enter new token"
            variant="outlined"
            value={telgramBotToken}
            onChange={(e) => setTelegramBotToken(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default ManageBotSettings;
