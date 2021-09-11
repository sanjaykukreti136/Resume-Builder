import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './components/redux/rootReducer';
import userReducer from './components/redux/reducers/userReducer';

let myStore = createStore(rootReducer);


ReactDOM.render(
  <Provider store={myStore} >
    <App />
  </Provider>, document.getElementById('root')
);
