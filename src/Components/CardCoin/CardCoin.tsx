import { FC } from "react";

import CardStyle from "./CardCoin.module.scss";

export type CardProps = {
  id?: React.Key;
  image: string;
  name: string;
  symbol?: string;
  subtitle?: React.ReactNode;
  content?: React.ReactNode;
  onClick?: React.MouseEventHandler;
};

export const CardCoin: FC<CardProps> = ({
  image,
  name,
  subtitle,
  content,
  onClick,
}) => {
  return (
    <div onClick={onClick}>
      <img src={image} alt="img" />
      <span>{name}</span>
      <span>{subtitle}</span>
      <div>{content}</div>
    </div>
  );
};
