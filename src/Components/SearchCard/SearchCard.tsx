import { FC } from "react";
import routes from "@configs/routes";
import { Link } from "react-router-dom";
import style from "./SearchCard.module.scss";

export type SearchCardProps = {
    id: string;
    image: string;
    name: string;
    symbol: string;
  };

export const SearchCard: FC<SearchCardProps> = ({
    id,
    image,
    name,
    symbol,
  }) => {
    return (
      <Link to={routes.markets.detail.createRoute(id)}>
        <div>
          <div>
            <img src={image} alt="img" />
          </div>
          <div>{name}</div>
          <div>
            {symbol.toLocaleUpperCase()}
          </div>
        </div>
      </Link>
    );
  };