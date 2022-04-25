import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import userReducer from './store/reducer/user';

const rootReducer = combineReducers({
  auth: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
