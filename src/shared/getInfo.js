import {
  sendTelegramLocation,
  sendTelegramMessage,
} from "./sendTelegramMessage";

function getUserDevice() {
  return navigator.platform;
}

function getTime() {
  let now = new Date();
  let pretty = [
    now.getFullYear(),
    "-",
    now.getMonth() + 1,
    "-",
    now.getDate(),
    " ",
    now.getHours(),
    ":",
    now.getMinutes(),
  ].join("");
  return pretty;
}

function fetchLocationInfoAndSendMessage() {
  fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
      const device = getUserDevice();
      const { ip, country_name, city, latitude, longitude } = data;
      const message = `Site is visited!\nTime: ${getTime()}\nDevice: ${device} \nIP: ${ip} \nCountry: ${country_name}\nCity: ${city}\nLatitude: ${latitude}\nLongitude: ${longitude}`;
      sendTelegramMessage(message);
      sendTelegramLocation(latitude, longitude);
    });
}

export function getInfo() {
  fetchLocationInfoAndSendMessage();
}
