import { CoinGecko } from "../api";
import { APIS } from "../api/api";

export const getPrice = async (ids: string, vs_currencies: string) => {
  return CoinGecko.get(`${APIS.SIMPLE_PRICE}`, {
    params: {
      ids,
      vs_currencies,
    },
  }).then((res) => res.data);
};
