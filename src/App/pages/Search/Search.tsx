import { FC, useState, useEffect } from "react";
import Input from "@components/Input";
import { useSearchParams } from "react-router-dom";
import { Card } from "@components/Card";
import SearchStore from "@store/SearchStore";
import { observer } from "mobx-react-lite";

const searchStore = new SearchStore();

const Search : FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  //const [search, setSearch] = useState("");

  const handleChange = (e: any) => {
    //setSearch(e.target.value);
    //setSearchParams({search})
    searchStore.setValue(e.target.value);
  };

  useEffect(() => {
    if (searchStore.value !== ''){
      searchStore.getCoinsList(searchStore.value);
    }
  }, [searchStore.value])

    return (
        <>
        <Input
        value={searchStore.value}
        onChange={handleChange}
        className='{styles.search__input}'
        placeholder="Search Cryptocurrency" 
        />
        {
          searchStore.searchCoinsList.map((coin) => {
            return (
              <div key={coin.id}>
              {coin.id}
              {coin.name}
              {coin.symbol}
              {coin.large}
              </div>
            )}
        )}
        </>
    )
}

export default observer(Search);