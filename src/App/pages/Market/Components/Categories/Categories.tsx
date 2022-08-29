import { FC } from "react";

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
      {categories.map((elem, index) => {
        return (
          <div
            key={elem}
            className={
              categorieIndex === index
                ? categoriesStyle.categorie_active
                : categoriesStyle.categorie
            }
            onClick={() => onClick(index)}
          >
            {elem}
          </div>
        );
      })}
    </div>
  );
};
