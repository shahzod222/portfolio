import { sendTelegramMessage } from "./sendTelegramMessage";

function getUserDevice() {
  return navigator.platform;
}

function fetchLocationInfoAndSendMessage() {
  fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
      const device = getUserDevice();
      const { ip, country_name, city } = data;
      const message = `Site is visited: \nDevice: ${device} \nAPI: ${ip} \nCountry: ${country_name}\nCity: ${city}`;
      sendTelegramMessage(message);
    });
}

export function getInfo() {
  fetchLocationInfoAndSendMessage();
}
