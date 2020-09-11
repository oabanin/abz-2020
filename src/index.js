import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import(/****/ './2.scss');

import bannerPhoto from "./assets/banner-photo.jpg";

const App = () => (
	<div>
		Hello
		<img src={bannerPhoto}/>
	</div>);
const root = document.getElementById('root');

ReactDOM.render(<App/>,root);