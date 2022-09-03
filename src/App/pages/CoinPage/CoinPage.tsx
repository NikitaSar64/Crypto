import { FC, useEffect, useState } from "react";

import { fetchCoin } from "@api/CryptoApi";
import { Loader, LoaderSize } from "@components/Loader";
import { ButtonBack } from "@pages/CoinPage/Components";
import { Link, useParams } from "react-router-dom";
import formatPercentage from "@utils/formatPercentage";
import CoinPageStyle from "./CoinPage.module.scss";
import { CoinModel, normalizeCoin } from "@store/models/crypto";
import { observer } from "mobx-react-lite";
import coinStore from "@store/CoinStore";
import Meta from "@utils/meta";

const CoinPage: FC = () => {
  const { id } = useParams();
  //let [coin, setCoin] = useState<CoinModel | null>(null);
  //const [isCoinLoading, setIsCoinLoading] = useState<boolean>(true);
//console.log(coinStore)
  useEffect(() => {
    // fetchCoin(id).then(data => {
    //   setCoin(normalizeCoin(data));
    //   setIsCoinLoading(false);
    // });
    coinStore.getCoin(id);
    //coinStore.getCoin(id);
    console.log(coinStore.coin);
  }, [coinStore]);
  return (
    <>
      {false ? (
        <Loader size={LoaderSize.l} className="loader" />
      ) : (
        <><div>111</div>
          {/* <div className={CoinPageStyle.coin__wrapper}>
            <Link to="/">
              <ButtonBack />
            </Link>
            <img src={coinStore.coin.image} alt="coin_img" />
            <div className={CoinPageStyle.coin__name}>{coinStore.coin.name}</div>
            <div className={CoinPageStyle.coin__symbol}>
              ({coinStore.coin.symbol?.toLocaleUpperCase()})
            </div>
          </div>
          <div className={CoinPageStyle.coin__wrapper}>
            <div className={CoinPageStyle.coin__price}>₹ {formatPercentage(coinStore.coin.price, 2)}</div>
            <div
              className={
                coinStore.coin.priceChange > 0
                  ? CoinPageStyle.coin__priceChange_up
                  : CoinPageStyle.coin__priceChange_down
              }
            >
              {formatPercentage(coinStore.coin.priceChange, 2)}
            </div>
          </div> */}
        </>
      )}
    </>
  );
};

export default observer(CoinPage);
