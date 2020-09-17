import React from 'react';

import Header from '../header';
import Banner from '../banner';
import About from '../about';
import Users from '../users';
import Footer from '../footer';

const App = () => {
	return (
		<>
			<Header/>
				<main>
					<Banner/>
					<About/>
					<Users/>
				</main>
			<Footer/>
		</>)
}

export default App;