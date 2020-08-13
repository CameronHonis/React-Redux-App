import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { cryptoDataReducer } from './store'
import Cryptos from './components/Cryptos'
import './index.css'

const store = createStore(cryptoDataReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <h1>Bitcoin Trade Tracker</h1>
    <Cryptos />
  </Provider>,
  document.getElementById('root')
);
