import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import App from './App';
import rootReducer from './components/redux/rootReducer';
import userReducer from './components/redux/reducers/userReducer';
import thunk from "redux-thunk";
let myStore = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={myStore} >
    <App />
  </Provider>, document.getElementById('root')
);
