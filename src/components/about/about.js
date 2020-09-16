import React from 'react';
import AboutLogo from '~assets/man-laptop-v1.svg';

const About = () => {
	return (
		<section className="about">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6 offset-lg-3">
						<h1 className="about__title">Let's get acquainted</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-5">
						<img className="about__logo" src={AboutLogo} />
					</div>
				</div>
			</div>
		</section>
		)
}

export default About;