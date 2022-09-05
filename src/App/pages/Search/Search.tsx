import { FC, useEffect } from "react";
import Input from "@components/Input";
import { useSearchParams } from "react-router-dom";
import { SearchCard } from "@components/SearchCard";
import { observer } from "mobx-react-lite";
import { useLocalStore } from "@utils/useLocalStore";
import SearchStore from "@store/SearchStore";

const Search : FC = () => {
  const searchStore = useLocalStore(() => new SearchStore());
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e: any) => {
    searchStore.setValue(e.target.value);
    setSearchParams({search : searchStore.value})
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
        placeholder="Search Cryptocurrency" 
        />
        {
          searchStore.searchCoinsList.map((coin) => {
            return (
              <SearchCard
              id={coin.id}
              key={coin.id}
              name={coin.name}
              image={coin.large}
              symbol={coin.symbol}/>
            )}
        )}
        </>
    )
}

export default observer(Search);