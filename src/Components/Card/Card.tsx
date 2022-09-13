import { FC } from "react";

import routes from "@configs/routes";
import formatPercentage from "@utils/formatPercentage";
import cn from "classnames";
import { Link } from "react-router-dom";

import cardStyle from "./Card.module.scss";

export type CardProps = {
  id: string;
  image: string;
  name: string;
  symbol: string;
  currentPrice?: number;
  priceChange?: number;
};

export const Card: FC<CardProps> = ({
  id,
  image,
  name,
  symbol,
  currentPrice,
  priceChange = -1,
}) => {
  return (
    <Link to={routes.markets.detail.createRoute(id)}>
      <div className={cardStyle.card}>
        <div className={cardStyle.card__wrapper_flex}>
          <img className={cardStyle.card__img} src={image} alt="img" />
          <div className={cardStyle.card__wrapper}>
            <div className={cardStyle.card__name}>{name}</div>
            <div className={cardStyle.card__symbol}>
              {symbol.toLocaleUpperCase()}
            </div>
          </div>
        </div>
        {currentPrice && (
          <div className={cardStyle.card__wrapper}>
            <div className={cardStyle.card__price}>₹{currentPrice}</div>
            <div
              className={cn(
                cardStyle.card__priceChange,
                priceChange > 0
                  ? cardStyle.card__priceChange_up
                  : cardStyle.card__priceChange_down
              )}
            >
              {formatPercentage(priceChange, 2)}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};
