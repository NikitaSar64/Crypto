import { useState, useEffect, FC } from "react";

import { fetchCoinsList } from "@api/CryptoApi";
import { Card } from "@components/Card";
import { Loader, LoaderSize } from "@components/Loader";
import { CoinsListModel, normalizeCoinsList } from "@store/models/crypto";

import { Categories } from "./Components/Categories";
import { Pagination } from "./Components/Pagination";
import marketStyle from "./Market.module.scss";

export const Market = () => {
  const [coinList, setCoinList] = useState<CoinsListModel[]>([]);
  const [categorie, setCategorie] = useState<number>(0);
  const [isCoinsLoading, setisCoinsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const perPage: number = 7;

  useEffect(() => {
    fetchCoinsList(perPage, currentPage).then((data) => {
      setCoinList(data.map((elem) => normalizeCoinsList(elem)));
      setisCoinsLoading(false);
    });
  }, [currentPage]);

  return (
    <>
      <Categories
        categorieIndex={categorie}
        onClick={(index) => setCategorie(index)}
      />
      <div className={marketStyle.market}>
        {isCoinsLoading ? (
          <Loader size={LoaderSize.l} className="loader" />
        ) : (
          coinList.map((coin) => (
            <Card
              id={coin.id}
              key={coin.symbol}
              name={coin.name}
              symbol={coin.symbol}
              image={coin.image}
              currentPrice={coin.price}
              priceChange={coin.priceChange}
            />
          ))
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        perPage={perPage}
        onClick={(numberPage) => setCurrentPage(numberPage)}
      />
    </>
  );
};
