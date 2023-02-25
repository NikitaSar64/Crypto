import { getCoinsList } from "@api/CryptoApi";
import { Card } from "@components/Card/Card";
import { useEffect, useState } from "react";
import { ICoin } from "models/interfaces/ICoin";
import { normalizeCoin } from "../helpers/normalizeCoin";
import appStyle from "./App.module.scss";

export const App = () : JSX.Element => {
  const[coinList, setCoinList] = useState<ICoin[] | Error>([]);

  useEffect((): void => {
    getCoinsList()
      .then(data => setCoinList(data.map(coin => normalizeCoin(coin))))
      .catch(error => setCoinList(error));
  }, []);


  return (
    <div className={appStyle.container}>
      <div className={appStyle.header}>Header</div>
      <div className={appStyle.wrapper}>
        <div className={appStyle.chart}>
          Chart
        </div>
        <div className={appStyle.quotes}>
          {
            Array.isArray(coinList) ? 
              coinList.map((coin) : JSX.Element => {
                return <Card key={coin.id}
                  name={coin.name}
                  price={coin.price.usd}
                  img={coin.imgSmall}
                  priceChangePercent={coin.priceChange24h}
                  priceChangeCurrency={coin.priceChangePercentage24hInCurrency.usd}
                  />
              }) :
              <div>{coinList.message}</div>
          }
        </div>
      </div>
      <div className={appStyle.footer}>Footer</div>
    </div>
  );
};

