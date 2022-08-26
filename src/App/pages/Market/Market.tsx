import { useState, useEffect, FC } from "react";

import { CardCoin, CardProps } from "@components/CardCoin";
import axios from "axios";

export const Market: FC = () => {
  const [coinList, setCointList] = useState<CardProps[]>([]);

  const requestСurList = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
    );
    setCointList(response.data);
    //console.log(response.data);
  };

  useEffect(() => {
    requestСurList();
  }, []);

  return (
    <div>
      {coinList.map((coin) => {
        return (
          <CardCoin
            key={coin.id}
            name={coin.name}
            image={coin.image}
          ></CardCoin>
        );
      })}
    </div>
  );
};
