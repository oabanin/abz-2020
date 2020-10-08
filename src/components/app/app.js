import React from 'react';

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
      <ErrorBoundary>
  			<Header/>
  				<main>
  					<Banner/>
  					<About/>
            <ErrorBoundary>
  					   <Users/>
            </ErrorBoundary>
  					<ErrorBoundary>
  						 <Form/>
  					</ErrorBoundary>
  				</main>
  			<Footer/>
      </ErrorBoundary>
		</>)
}

export default App;
