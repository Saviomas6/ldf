import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./modules/app/App";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { store } from "./logic/store/store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
function getLibrary(provider: any) {
  const library = new Web3(provider);
  return library;
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Web3ReactProvider getLibrary={getLibrary}>
          <App />
        </Web3ReactProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
