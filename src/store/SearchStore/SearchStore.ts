import { fetchSearchCoins } from "@api/CryptoApi";
import Meta from "@utils/meta";
import { CoinSearchModel } from "@store/models/crypto";
import { action, makeObservable, observable } from "mobx";

type PrivateFields = "_searchCoinsList" | "_meta" | "_value";

export default class SearchStore {
    private _searchCoinsList : CoinSearchModel[] = [];
    private _meta: Meta = Meta.loading;
    private _value : string = '';
  
    constructor() {
      makeObservable<SearchStore, PrivateFields>(this, {
        _searchCoinsList: observable,
        _meta: observable,
        _value: observable,
        getCoinsList: action,
        setValue: action,
      });
    }
  
    async getCoinsList(value : string) {
      const respSearchCoinsList = await fetchSearchCoins(value);
      this._searchCoinsList = respSearchCoinsList;
    }
    
    setValue(value : string){
        this._value = value;
    }

    get searchCoinsList(){
        return this._searchCoinsList;
    }

    get value(){
        return this._value;
    }
  }