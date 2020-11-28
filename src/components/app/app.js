import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../home';
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

			<Router>
				<Header />
				<main>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/users' component={Users} />
						<Route path='/form' component={Form} />
					</Switch>
				</main>
				<Footer />
			</Router>

			{/* <Header />
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
			<Footer /> */}
		</>)
}

export default App;
