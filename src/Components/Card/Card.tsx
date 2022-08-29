import { FC } from "react";

import CardStyle from "./Card.module.scss";

export type CardProps = {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  onClick: (name: string) => void;
};

export const Card: FC<CardProps> = ({
  id,
  image,
  name,
  symbol,
  current_price,
  price_change_percentage_24h,
  onClick,
}) => {
  return (
    <div className={CardStyle.card} onClick={() => onClick(id)}>
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
        <div className={CardStyle.card__price}>₹{current_price}</div>
        <div
          className={
            price_change_percentage_24h > 0
              ? CardStyle.card__priceChange_up
              : CardStyle.card__priceChange_down
          }
        >
          {price_change_percentage_24h.toFixed(2)}%
        </div>
      </div>
    </div>
  );
};
