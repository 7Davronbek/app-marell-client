import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/navigation";
import './sass/main.scss';
import './sass/admin.scss'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/reducer/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

