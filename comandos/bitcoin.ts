import fetch from "node-fetch";
import { Channel, MessageData } from "@retconned/kick-js";

interface CoinbasePriceResponse {
  data: {
    amount: string;
    base: string;
    currency: string;
  };
}

export const name = "bitcoin";

export async function execute(client: any, message: MessageData) {
  const response = await fetch("https://api.coinbase.com/v2/prices/spot?currency=USD");
  const data = (await response.json()) as CoinbasePriceResponse;

  if (data && data.data?.amount) {
    await client.sendMessage(`₿ 🪙 @${message.sender.username}, el precio actual de Bitcoin es: $${data.data.amount} ${data.data.currency}`);
  } else {
    await client.sendMessage("No pude obtener el precio de Bitcoin en este momento.");
  }
}
