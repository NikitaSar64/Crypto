import axios from "axios";
import { CoinApi, CoinsListApi } from "@store/models/crypto";

export const fetchCoinsList = async (perPage : number, currentPage : number) => {
    const response = await axios.get<CoinsListApi[]>(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=${perPage}&page=${currentPage}`
    );
    return response.data;
  };

export const fetchCoin = async (id: string | undefined) => {
  const response = await axios.get<CoinApi>(
    `https://api.coingecko.com/api/v3/coins/${id}`
  );
  return response.data;
};
