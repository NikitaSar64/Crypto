import "@configs/configureMobX";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@styles/index.scss";
import { App } from "@app/App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  );

if (module.hot){
    module.hot.accept();
}