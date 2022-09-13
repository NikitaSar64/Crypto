import { FC, useEffect } from "react";
import { Card } from "@components/Card";
import Input from "@components/Input";
import SearchStore from "@store/SearchStore";
import { useLocalStore } from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";
import { useSearchParams } from "react-router-dom";

import searchStyle from "./Search.module.scss";

const Search: FC = () => {
  const searchStore = useLocalStore(() => new SearchStore());
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e: any) => {
    searchStore.setValue(e.target.value);
    setSearchParams({ search: searchStore.value });
  };

  useEffect(() => {
    if (searchStore.value !== "") {
      searchStore.getCoinsList(searchStore.value);
    }
  }, [searchStore.value]);

  return (
    <div className={searchStyle.search}>
      <Input
        value={searchStore.value}
        onChange={handleChange}
        placeholder="Search Cryptocurrency"
      />
      {searchStore.searchCoinsList.map((coin) => {
        return (
          <Card
            id={coin.id}
            key={coin.symbol}
            name={coin.name}
            symbol={coin.symbol}
            image={coin.large}
          />
        );
      })}
    </div>
  );
};

export default observer(Search);
