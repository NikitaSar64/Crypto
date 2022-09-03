import { FC } from "react";

import routes from "@configs/routes";
import { Link } from "react-router-dom";
import formatPercentage from "@utils/formatPercentage";
import CardStyle from "./Card.module.scss";

export type CardProps = {
  id: string;
  image: string;
  name: string;
  symbol: string;
  currentPrice: number;
  priceChange: number;
};

export const Card: FC<CardProps> = ({
  id,
  image,
  name,
  symbol,
  currentPrice,
  priceChange,
}) => {
  return (
    <Link to={routes.markets.detail.createRoute(id)}>
      <div className={CardStyle.card}>
        <div className={CardStyle.card__wrapper_flex}>
          <img className={CardStyle.card__img} src={image} alt="img" />
          <div className={CardStyle.card__wrapper}>
            <div className={CardStyle.card__name}>{name}</div>
            <div className={CardStyle.card__symbol}>
              {symbol.toLocaleUpperCase()}
            </div>
          </div>
        </div>
        <div className={CardStyle.card__wrapper}>
          <div className={CardStyle.card__price}>₹{currentPrice}</div>
          <div
            className={
              priceChange > 0
                ? CardStyle.card__priceChange_up
                : CardStyle.card__priceChange_down
            }
          >
            {formatPercentage(priceChange, 2)}
          </div>
        </div>
      </div>
    </Link>
  );
};
