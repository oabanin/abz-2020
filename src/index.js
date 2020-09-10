import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import(/****/ './2.scss');

const App = () => (<div className="orange">Hello</div>);
const root = document.getElementById('root');

ReactDOM.render(<App/>,root);