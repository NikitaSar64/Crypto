import { FC } from "react";

import routes from "@configs/routes";
import CoinPage from "@pages/CoinPage";
import { Market } from "@pages/Market";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: FC = () => {
  //console.log(routes.markets.detail.mask);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routes.main.mask} element={<Market />} />
          <Route path={routes.markets.detail.mask} element={<CoinPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
