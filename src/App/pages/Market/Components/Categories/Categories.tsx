import { FC } from "react";

import cn from "classnames";

import categoriesStyle from "./Categories.module.scss";

export type CategoriesProps = {
  categorieIndex: number;
  onClick: (value: number) => void;
};

export const Categories: FC<CategoriesProps> = ({
  onClick,
  categorieIndex,
}) => {
  const categories: string[] = ["All", "Gainer", "Loser", "Favourites"];

  return (
    <div className={categoriesStyle.categories}>
      <div className={categoriesStyle.categories__wrapper}>
        {categories.map((elem, index) => {
          return (
            <div
              key={elem}
              className={cn(
                categorieIndex === index
                  ? categoriesStyle.categorie_active
                  : categoriesStyle.categorie
              )}
              onClick={() => onClick(index)}
            >
              {elem}
            </div>
          );
        })}
      </div>
    </div>
  );
};
