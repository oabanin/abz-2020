import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ErrorBoundary from '../error-boundary';
import Header from '../header';
import Banner from '../banner';
import About from '../about';
import Users from '../users';
import Form from '../form';
import Footer from '../footer';


const App = () => {
	return (
		<>
			<Header />
			<main>
				<Banner />
				<About />
				<ErrorBoundary>
					<Users />
				</ErrorBoundary>
				<ErrorBoundary>
					<Form />
				</ErrorBoundary>
			</main>
			<Footer />

		</>)
}

export default App;
