import React from "react";
import thunk from 'redux-thunk';
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import mainReducer from './reducers';

const store = createStore(mainReducer, {}, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
