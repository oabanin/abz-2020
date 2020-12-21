import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import ReactModal from 'react-modal';

import App from './components/app';

//import LoadHome from 'bundle-loader?lazy!./pages/home';


import ErrorBoundary from './components/error-boundary';
import { ApiServiceProvider } from './components/api-service-context';
import * as api from './services/api';

import store from "./store";

import './scss/styles.scss';

ReactModal.setAppElement('#root');
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ErrorBoundary>
				<ApiServiceProvider value={api}>
					<App />
				</ApiServiceProvider>
			</ErrorBoundary>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'));
