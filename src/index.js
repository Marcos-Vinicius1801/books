import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { bookReducer } from "../src/reducers/bookReducer";

import App from "./App";
import thunk from "redux-thunk";

const store = createStore(bookReducer, applyMiddleware(thunk));

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,

  document.getElementById("root")
);
