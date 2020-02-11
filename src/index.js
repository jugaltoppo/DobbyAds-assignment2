import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './index.css';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./standingsReducer";

const standings = createStore(reducer);


ReactDOM.render(
  <Provider store={standings}>
  <App />
  </Provider>,
  document.getElementById('root')
);
