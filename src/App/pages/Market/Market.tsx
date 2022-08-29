import { useState, useEffect, FC } from "react";

import { Card, CardProps } from "@components/Card";
import { Loader, LoaderSize } from "@components/Loader";
import axios from "axios";
import { Link } from "react-router-dom";

import { Categories } from "./Components/Categories";
import { Pagination } from "./Components/Pagination";
import marketStyle from "./Market.module.scss";

export type marketProps = {
  onClick: (name: string) => void;
};

export const Market: FC<marketProps> = ({ onClick }) => {
  const [coinList, setCointList] = useState<CardProps[]>([]);
  const [categorie, setCategorie] = useState<number>(0);
  const [isCoinsLoading, setisCoinsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const perPage: number = 7;

  const requestСurList = async () => {
    setisCoinsLoading(true);
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=${perPage}&page=${currentPage}`
    );
    setCointList(response.data);
    setisCoinsLoading(false);
  };

  useEffect(() => {
    requestСurList();
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
            <Link to="/coinpage">
              <Card
                id={coin.id}
                key={coin.symbol}
                name={coin.name}
                symbol={coin.symbol}
                image={coin.image}
                current_price={coin.current_price}
                price_change_percentage_24h={coin.price_change_percentage_24h}
                onClick={(name) => onClick(name)}
              />
            </Link>
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
