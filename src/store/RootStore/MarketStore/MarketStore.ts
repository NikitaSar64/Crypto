import { fetchCoinsList } from "@api/CryptoApi";
import { CoinsListModel, normalizeCoinsList } from "@store/models/crypto";
import Meta from "@utils/meta";
import { action, makeObservable, observable } from "mobx";

type PrivateFields = "_coinsList" | "_meta" | "_currentPage" | "_scroll";

export default class MarketStore {
    private _coinsList: CoinsListModel[] = [];
    private _meta: Meta = Meta.loading;
    private _currentPage: number = 1;
    private _scroll: boolean = true;
  
    constructor() {
      makeObservable<MarketStore, PrivateFields>(this, {
        _coinsList: observable,
        _meta: observable,
        _currentPage: observable,
        _scroll: observable,
        getCoinsList: action,
        changePage: action,
      });
    }
  
    async getCoinsList() {
      const responseCoinsList = await fetchCoinsList(7, this._currentPage);
      this._meta = Meta.success;
      const tempCoinsList : CoinsListModel[] = responseCoinsList.map((coin) => normalizeCoinsList(coin))
      this._coinsList = [...this._coinsList, ...tempCoinsList];
      this._scroll = false;
    }

    changePage() {
        this._currentPage += 1;
        this._scroll = true;
    }

    get scroll(){
        return this._scroll;
    }
  
    get coinsList() {
      return this._coinsList;
    }
  
    get meta() {
      return this._meta;
    }

    get currentPage(){
        return this._currentPage;
    }

    destroy() {
      
    }
  }