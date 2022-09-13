import { FC } from "react";

import LoaderStyle from "./Loader.module.scss";

export enum LoaderSize {
  s = "s",
  m = "m",
  l = "l",
}

export type LoaderProps = {
  loading?: boolean;
  size?: LoaderSize;
  className?: string;
};

export const Loader: FC<LoaderProps> = ({
  size = LoaderSize.m,
  loading = true,
  className,
}) => {
  return (
    <>
      {loading && (
        <div
          className={`${LoaderStyle[`loader_size-${size}`]} ${
            LoaderStyle[`${className}`]
          }`}
        ></div>
      )}
    </>
  );
};
