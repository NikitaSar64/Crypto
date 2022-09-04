import { FC } from "react";

import routes from "@configs/routes";
import CoinPage from "@pages/CoinPage";
import Market from "@pages/Market";
import Search from "@pages/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routes.main.mask} element={<Market />} />
          <Route path={routes.markets.detail.mask} element={<CoinPage />} />
          <Route path={routes.search.mask} element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
