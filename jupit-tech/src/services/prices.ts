import { CoinGecko } from "../api";
import { APIS } from "../api/api";

export const getCryptoPrice = async (ids: string, vs_currencies: string) => {
  return CoinGecko.get(`${APIS.SIMPLE_PRICE}`, {
    params: {
      ids,
      vs_currencies,
    },
  }).then((res) => {
    return res.data;
  });
};
