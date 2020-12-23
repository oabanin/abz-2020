import React, { Suspense } from 'react';

import ErrorBoundary from '../error-boundary';
import Header from '../header';
import Banner from '../banner';
import About from '../about';
import Spinner from '../spinner';

const Form = React.lazy(() => import('../form'));
const Users = React.lazy(() => import('../users'));
const Footer = React.lazy(() => import('../footer'));





const App = () => {
	return (
		<>
			<Header />
			<main>
				<Banner />
				<About />
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
			<ErrorBoundary>
				<Suspense fallback={<Spinner />}>
					<Footer />
				</Suspense>
			</ErrorBoundary>

		</>)
}

export default App;
