import React, { Suspense } from 'react';

import ErrorBoundary from '../error-boundary';
//import Header from '../header';
//import Banner from '../banner';
import Spinner from '../spinner';

//import About from '../about';
//import Users from '../users';
//import Form from '../form';


//import Footer from '../footer';

const Header = React.lazy(() => import('../header'));
const Banner = React.lazy(() => import('../banner'));
const Form = React.lazy(() => import('../form'));

const Users = React.lazy(() => import('../users'));
const About = React.lazy(() => import('../about'));
const Footer = React.lazy(() => import('../footer'));





const App = () => {
	return (
		<>
			<Suspense fallback={<Spinner />}>
				<Header />
			</Suspense>
			<main>
				<Suspense fallback={<Spinner />}>
					<Banner />
				</Suspense>
				<Suspense fallback={<Spinner />}>
					<About />
				</Suspense>
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
						<Users />
					</Suspense>
				</ErrorBoundary>
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
						<Form />
					</Suspense>
				</ErrorBoundary>

			</main>
			<Suspense fallback={<Spinner />}>
				<Footer />
			</Suspense>

		</>)
}

export default App;
