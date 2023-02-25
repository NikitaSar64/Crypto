import axios from "axios";
import { IApiCoin } from "models/interfaces/ICoin";

export const getCoinsList = async () : Promise<IApiCoin[]> => {
  const response = await axios.get<IApiCoin[]>(
    `https://api.coingecko.com/api/v3/coins/`
  );
  console.log(response.data)
  return response.data;
};

// запрос для получения графика цены. Дата указана в формате unix время (переводить тут https://www.unixtimestamp.com/)

export const getChartData = async () => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=30`
  );
  console.log(response.data)
  return response.data;
};
