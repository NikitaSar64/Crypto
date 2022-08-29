import { useState } from "react";

import { CoinPage } from "@pages/CoinPage";
import { Market } from "@pages/Market";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [coinId, setCoinId] = useState<string>("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Market onClick={(id) => setCoinId(id)} />}
          />
          <Route path="/coinpage" element={<CoinPage id={coinId} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
