import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import ReactModal from 'react-modal';

import { Provider } from 'react-redux'
import store from "./store";

import './scss/styles.scss';


ReactModal.setAppElement('#root');
ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
  		<App/>
  	</Provider>
  </React.StrictMode>,
    ,document.getElementById('root'));
