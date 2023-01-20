import axios from "axios";
import { APIS } from "./api";

export const CoinGecko = axios.create({
  baseURL: process.env.BASE_URL,
});

export const getBitcoinPrice = async () => {
  const response = await CoinGecko.get(`${APIS.SIMPLE_PRICE}`, {
    params: {
      ids: "bitcoin",
      vs_currencies: "usd",
    },
  });

  return response.data.bitcoin.usd;
};
