import { FC, useEffect, useState } from "react";

import { ButtonBack } from "@pages/CoinPage/Components";
import axios from "axios";
import { Link } from "react-router-dom";

import CoinPageStyle from "./CoinPage.module.scss";

interface Coin {
  id: string;
  name?: string;
  symbol?: string;
  image?: string;
  price?: number;
  priceChange?: number;
}

export const CoinPage: FC<Coin> = ({ id }) => {
  const [coin, setCoin] = useState<Coin>({
    id: "",
    name: "",
    symbol: "",
    image: "",
    price: 0,
    priceChange: 0,
  });

  const requestCoin = async () => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );

    setCoin({
      id: response.data.id,
      name: response.data.name,
      image: response.data.image.small,
      symbol: response.data.symbol,
      price: response.data.market_data.current_price.usd,
      priceChange: response.data.market_data.price_change_24h_in_currency.usd,
    });
  };

  useEffect(() => {
    requestCoin();
  }, [coin]);

  return (
    <>
      <div className={CoinPageStyle.coin__wrapper}>
        <Link to="/">
          <ButtonBack />
        </Link>
        <img src={coin.image} alt="coin_img" />
        <div className={CoinPageStyle.coin__name}>{coin.name}</div>
        <div className={CoinPageStyle.coin__symbol}>
          ({coin.symbol?.toLocaleUpperCase()})
        </div>
      </div>
      <div className={CoinPageStyle.coin__wrapper}>
        <div className={CoinPageStyle.coin__price}>₹ {coin.price}</div>
        <div
          className={
            coin.priceChange > 0
              ? CoinPageStyle.coin__priceChange_up
              : CoinPageStyle.coin__priceChange_down
          }
        >
          {coin.priceChange}
        </div>
      </div>
    </>
  );
};
