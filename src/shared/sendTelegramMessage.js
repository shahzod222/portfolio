export function sendTelegramMessage(message) {
  const telegramBotId = import.meta.env.VITE_TELEGRAM_BOT_ID;
  const chatId = import.meta.env.VITE_CHAT_ID;

  console.log(telegramBotId, chatId);

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
