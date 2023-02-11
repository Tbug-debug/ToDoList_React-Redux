import { createGlobalStyle } from "styled-components";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App";
import { store, persistor } from "./redux/config/configStore";
import { PersistGate } from "redux-persist/integration/react";

const Globalstyle = createGlobalStyle`
@font-face {
  font-family: "TTTtangsbudaejjigaeB";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/TTTtangsbudaejjigaeB.woff2")
    format("woff2");
  font-weight: 700;
  font-style: normal;
}
a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: #b83b5e;
}

`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Globalstyle />
      <App />
    </PersistGate>
  </Provider>
);
