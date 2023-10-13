const axios = require("axios");
const TelegramBot = require("node-telegram-bot-api");

// const token = await axios.get('http://localhost:8000/bot');

const server_url = "https://botserver-production.up.railway.app";

const getTelegramBotToken = async () => {
  try {
    const response = await axios.get(`${server_url}/bot`);
    return response.data[0].token; // Assuming 'response.data' contains the token.
  } catch (error) {
    console.error("Error fetching Telegram bot token:", error);
    return null;
  }
};

getTelegramBotToken().then((token) => {
  console.log(token);
  const bot = new TelegramBot(token, { polling: true });
  const openWeatherMapApiKey = "049098873d6c48b04c84bd92026f8116";

  const message =
    "Welcome to Weather bot \nHere are the list of commands \nTo subscribe to the weather bot - /subscribe\n To unsubscribe from the weather bot - /unsubscribe";

  let subscribers = new Set();

  const getSubscriber = async () => {
    try {
      const response = await axios.get(`${server_url}/user`);
      const users = response.data; // Assuming the data is an array of users

      for (const user of users) {
        // subscribers.add([user.chatId, user.status]);
        const pair = [user.chatId, user.status];
        if (
          ![...subscribers].some(
            (existingPair) =>
              existingPair[0] === pair[0] && existingPair[1] === pair[1]
          )
        ) {
          subscribers.add(pair);
        }
      }

      console.log("Subscribers:", subscribers);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
    }
  };

  getSubscriber();

  bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    if (messageText === "/start") {
      bot.sendMessage(chatId, message);
      console.log(chatId);
    }

    if (messageText === "/subscribe") {
      bot.sendMessage(
        chatId,
        "subscribed to weather bot \nweather updated will be send once a day"
      );

      const firstName = msg.chat.first_name;

      const user = {
        firstName: firstName,
        chatId: chatId,
      };
      console.log(user);

      axios
        .post(`${server_url}/user`, user)
        .then((response) => {
          console.log(
            "Data sent successfully to localhost:3000",
            response.data
          );

          if (response.data === "User added successfully") {
            subscribers.add([chatId, "Active"]);
          }
        })
        .catch((error) => {
          console.error("Error sending data:", error);
        });
    }
    if (messageText === "/unsubscribe") {
      subscribers.delete(chatId);

      axios
        .delete(`${server_url}/user/${chatId}`)
        .then((res) => {
          console.log("Data deleted successfully");
        })
        .catch((err) => {
          console.log("Error deleting user");
        });
      bot.sendMessage(chatId, "unsubscribed from weather bot");
    }
  });

  setInterval(() => {
    var weatherUpdate = "Today's weather: Sunny and 25°C. Enjoy your day!";
    for (const user of subscribers) {
      if (user[1] === "Active") {
        var chatId = user[0];
        axios
          .get(
            `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${openWeatherMapApiKey}`
          )
          .then((response) => {
            const weatherDescription =
              response.data.list[0].weather[0].description;
            // const weatherDescription = response.data.daily.weather[0].description;
            // const temperature = response.data.main.temp;
            weatherUpdate = `Today\'s weather: ${weatherDescription}. Enjoy your day!`;
            console.log("weather update send to", chatId);
            bot.sendMessage(chatId, weatherUpdate);
          })
          .catch((error) => {
            console.error("Error fetching weather data:", error);
            bot.sendMessage(chatId, weatherUpdate);
          });
      }
    }
    subscribers = new Set();
    getSubscriber();
  }, 60 * 500);
});
