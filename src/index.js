import React from 'react';
import ReactDOM from 'react-dom';

import {getRegisteredUsers} from './services/api';

import App from './components/app';

import './scss/styles.scss';

getRegisteredUsers();


ReactDOM.render(<App/>,document.getElementById('root'));