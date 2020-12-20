import React from 'react';

import ErrorBoundary from '../error-boundary';
import Header from '../header';
import Banner from '../banner';
// import About from '../about';
// import Users from '../users';
// import Form from '../form';
// import Footer from '../footer';

import About from 'bundle-loader?lazy!../about';
import Users from 'bundle-loader?lazy!../users';
import Form from 'bundle-loader?lazy!../form';
import Footer from 'bundle-loader?lazy!../footer';




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
