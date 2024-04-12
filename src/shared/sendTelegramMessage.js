const telegramBotId = import.meta.env.VITE_TELEGRAM_BOT_ID;
const chatId = import.meta.env.VITE_CHAT_ID;

export function sendTelegramMessage(message) {
  fetch(`https://api.telegram.org/bot${telegramBotId}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "HTML",
    }),
  });
}

export function sendTelegramLocation(latitude, longitude) {
  fetch(`https://api.telegram.org/bot${telegramBotId}/sendLocation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    body: JSON.stringify({
      chat_id: chatId,
      parse_mode: "HTML",
      latitude: latitude,
      longitude: longitude,
      horizontal_accuracy: 1000,
    }),
  });
}
