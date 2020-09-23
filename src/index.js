import React from 'react';
import ReactDOM from 'react-dom';

//import {getRegisteredUsers, getPositions} from './services/api';

import App from './components/app';

import './scss/styles.scss';

// getPositions();
// getPositions().then(console.log)
// console.log(getPositions());
// getPositions().then(data => console.log(data.positions));
//console.log(getPositions());
//getPositions().then(data=>console.log(data));


ReactDOM.render(<App/>,document.getElementById('root'));
