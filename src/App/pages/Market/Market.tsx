import { useState, useEffect, FC } from "react";

import searchIcon from "@assets/images/search.svg";
import { Card } from "@components/Card";
import { Loader, LoaderSize } from "@components/Loader";
import routes from "@configs/routes";
import rootStore from "@store/RootStore";
import Meta from "@utils/meta";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { Categories } from "./Components/Categories";
import marketStyle from "./Market.module.scss";

const Market: FC = () => {
  const [categorie, setCategorie] = useState<number>(0);

  useEffect(() => {
    if (rootStore.marketStore.scroll) {
      rootStore.marketStore.getCoinsList();
    }
  }, [rootStore.marketStore.currentPage]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight ===
      e.target.documentElement.scrollTop + window.innerHeight
    ) {
      rootStore.marketStore.changePage();
    }
  };

  return (
    <div className={marketStyle.market}>
      <div>
        <Link to={routes.search.mask}>
          <img src={searchIcon} alt="search" />
        </Link>
      </div>
      <Categories
        categorieIndex={categorie}
        onClick={(index) => setCategorie(index)}
      />
      <div className={marketStyle.market__wrapper}>
        {rootStore.marketStore.meta === Meta.loading ? (
          <Loader size={LoaderSize.l} className="loader" />
        ) : (
          rootStore.marketStore.coinsList.map((coin) => (
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
    </div>
  );
};

export default observer(Market);
