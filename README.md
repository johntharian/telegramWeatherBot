# telegramWeatherBot

## Description

A telegram bot that allows users to subscribe for getting daily update on weather and an admin panel with google login for updating bot settings(api keys etc) and managing user accounts(blocking/deleting etc).

## Demonstration
### Watch the demo here [https://www.youtube.com/watch?v=fixwSRjhzN8](https://www.youtube.com/watch?v=fixwSRjhzN8)
[![Demo](https://img.youtube.com/vi/fixwSRjhzN8/0.jpg)](https://www.youtube.com/watch?v=fixwSRjhzN8)


## Setup

Nest.js has been used for the backend.
React has been used for the frontend.
Node.js has been used for the telegram bot.

## Installation

```bash
# clone the repository
$ git clone https://github.com/johntharian/telegramWeatherBot.git
# change directory
$ cd telegramWeatherBot
# install dependencies for running telegram bot
$ npm install
```

## Running the app

```bash
# start bot
$ node bot.js
```

This should start the telegram bot.

The bot url is [weatherBot](https://t.me/hospals_weather_bot)

## Bot Commands

- /start - starts the telegram bot 
- /subscribe - subscribe to weather updates
- /unsubscribe - unsubscribe from weather updates


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Admin Panel 

The admin panel has been created and deployed using vercel and railway.
The admin panel is available at [Admin Panel](https://bot-client-rho.vercel.app/)

## Stay in touch

- Author - jtharian13@gmail.com


