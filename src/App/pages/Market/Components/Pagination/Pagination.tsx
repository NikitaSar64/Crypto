import { FC } from "react";

import paginationStyle from "./Pagination.module.scss";

export type PaginationProps = {
  currentPage: number;
  perPage: number;
  onClick(numberPage: number): void;
};

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  perPage,
  onClick,
}) => {
  const maxPages: number = Math.ceil(322 / perPage); // 322 кол-во монет в категории криптовалюты
  const pages: number[] = [];

  for (let i = 1; i <= maxPages; i++) {
    pages[i] = i;
  }

  return (
    <div className={paginationStyle.pages}>
      {pages.map((page) => (
        <div
          key={page}
          className={`${paginationStyle.page} ${
            page === currentPage ? paginationStyle.page_active : ""
          }`}
          onClick={() => onClick(page)}
        >
          {page}
        </div>
      ))}
    </div>
  );
};
