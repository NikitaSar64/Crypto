import axios from "axios";
import { IApiCoin } from "models/interfaces/ICoin";

export const getCoinsList = async () : Promise<IApiCoin[]> => {
  const response = await axios.get<IApiCoin[]>(
    `https://api.coingecko.com/api/v3/coins/`
  );

  return response.data;
};

export const getChartData = async () : Promise<number[]> => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=1`
  );

  return response.data;
};
