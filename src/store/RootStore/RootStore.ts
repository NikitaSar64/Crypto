import MarketStore from "./MarketStore";
import QueryParamsStore from "./QueryParamsStore";

export default class RootStore {
  readonly marketStore = new MarketStore();
  readonly query = new QueryParamsStore();
}