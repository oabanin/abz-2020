import React from 'react';

import Header from '../header';
import Banner from '../banner';
import About from '../about';
import Users from '../users';
import Form from '../form';
import Footer from '../footer';

const App = () => {
	return (
		<>
			<Header/>
				<main>
					<Banner/>
					<About/>
					<Users/>
					<Form/>
				</main>
			<Footer/>
		</>)
}

export default App;