import rootStore from "@store/RootStore";
import { useLocation } from "react-router-dom";

export const useQueryParamsStoreInit = (): void => {
  const { search } = useLocation();

  rootStore.query.setSearch(search);
};
