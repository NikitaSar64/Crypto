import { fetchCoin } from "@api/CryptoApi";
import { CoinModel, normalizeCoin } from "@store/models/crypto";
import Meta from "@utils/meta";
import { action, makeObservable, observable } from "mobx";

type PrivateFields = "_coin" | "_meta";

export default class CoinStore {
  private _coin: CoinModel | null = null;
  private _meta: Meta = Meta.loading;

  constructor() {
    makeObservable<CoinStore, PrivateFields>(this, {
      _coin: observable,
      _meta: observable,
      getCoin: action,
    });
  }

  async getCoin(id: string | undefined) {
    this._meta = Meta.loading;
    const responseCoin = await fetchCoin(id);
    this._meta = Meta.success;
    this._coin = normalizeCoin(responseCoin);
  }

  get coin() {
    return this._coin;
  }

  get meta() {
    return this._meta;
  }

  destroy() {
    
  }
}
