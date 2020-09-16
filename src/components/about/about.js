import React from 'react';
import AboutLogo from '~assets/man-laptop-v1.svg';

const About = () => {
	return (
		<section className="about">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-8 offset-md-2">
						<h1 className="about__title">Let's get acquainted</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-5">
						<img className="about__logo" src={AboutLogo} />
					</div>
					<div className="col-lg-7">
						<div className="about__text">
							<h2 className="about__heading">I am cool frontend developer</h2>
							<p>We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.</p>
							<p>If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P​SD mockup​ into HTML5/CSS3. </p>

							<a className="about__link" href="#sign-up">Sing up now</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		)
}

export default About;