import cardStyle from "./Card.module.scss";
import { CardProps } from "./Card.props";
import cn from "classnames";

export const Card = ({name, price, img, priceChangePercent, priceChangeCurrency} : CardProps)  : JSX.Element=> {
  return (
      <div className={cardStyle.card}>
        <div className={cardStyle.coinName}>
          <img className={cardStyle.cardImg} src={img} alt={name}/>
          <div>{name}</div>
        </div>
        <div>{price}</div>
        <div 
          className={cn({
            [cardStyle.changeUp] : priceChangePercent >= 0,
            [cardStyle.changeDown] : priceChangePercent < 0
          })}>
          {priceChangePercent.toFixed(2)}
        </div>
        <div
          className={cn({
            [cardStyle.changeUp] : priceChangePercent >= 0,
            [cardStyle.changeDown] : priceChangePercent < 0
          })}>
          {priceChangeCurrency.toFixed(2)}
        </div>
      </div>
  );
};
