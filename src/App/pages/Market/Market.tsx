import { useState, useEffect, FC } from "react";

import { Card } from "@components/Card";
import { Loader, LoaderSize } from "@components/Loader";
import Meta from "@utils/meta";
import { Categories } from "./Components/Categories";
import marketStyle from "./Market.module.scss";
import marketStore from "@store/MarketStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import routes from "@configs/routes";
import searchIcon from "@assets/images/search.svg";

const Market: FC = () => {
  const [categorie, setCategorie] = useState<number>(0);

  useEffect(() => {
    marketStore.getCoinsList();
  }, [marketStore.currentPage]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler)
      marketStore.clearStore();
    }
  }, [])

  const scrollHandler = (e : any) => {
    if (e.target.documentElement.scrollHeight === (e.target.documentElement.scrollTop + window.innerHeight)){
      marketStore.changePage();
    }
  }

  return (
    <>
    <Link to={routes.search.mask}>
      <div>
        <img src={searchIcon} alt="search" />
      </div>
    </Link>
      <Categories
        categorieIndex={categorie}
        onClick={(index) => setCategorie(index)}
      />
      <div className={marketStyle.market}>
        {marketStore.meta === Meta.loading ? (
          <Loader size={LoaderSize.l} className="loader" />
        ) : (
          marketStore.coinsList.map((coin) => (
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
    </>
  );
};

export default observer(Market);
