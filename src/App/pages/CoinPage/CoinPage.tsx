import { FC, useEffect } from "react";

import { Loader, LoaderSize } from "@components/Loader";
import { ButtonBack } from "./Components/ButtonBack";
import CoinStore from "@store/CoinStore";
import formatPercentage from "@utils/formatPercentage";
import Meta from "@utils/meta";
import { useLocalStore } from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import cn from "classnames";
import CoinPageStyle from "./CoinPage.module.scss";

const CoinPage: FC = () => {
  const coinStore = useLocalStore(() => new CoinStore());
  const { id } = useParams();

  useEffect(() => {
    coinStore.getCoin(id);
  }, []);

  return (
    <>
      {coinStore.meta === Meta.loading ? (
        <Loader size={LoaderSize.l} className="loader" />
      ) : (
        <>
          <div className={CoinPageStyle.coin__wrapper}>
            <ButtonBack />
            <img src={coinStore.coin?.image} alt="coin_img" />
            <div className={CoinPageStyle.coin__name}>
              {coinStore.coin?.name}
            </div>
            <div className={CoinPageStyle.coin__symbol}>
              ({coinStore.coin?.symbol?.toLocaleUpperCase()})
            </div>
          </div>
          <div className={CoinPageStyle.coin__wrapper}>
            <div className={CoinPageStyle.coin__price}>
              ₹ {formatPercentage(coinStore.coin?.price, 2)}
            </div>
            <div
              className={cn(
                coinStore?.coin?.priceChange !== undefined
                  ? (coinStore.coin.priceChange > 0 ? CoinPageStyle.coin__priceChange_up : CoinPageStyle.coin__priceChange_down)
                  : ""
              )
              }
            >
              {formatPercentage(coinStore?.coin?.priceChange, 2)}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default observer(CoinPage);
