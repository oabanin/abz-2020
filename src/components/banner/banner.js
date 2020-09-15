import React from 'react';

const Banner = () => {
	return (
		<section className="banner">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-7">
						<h1 className="banner__title">Test assignment for Frontend Developer position</h1>
						<p className="banner__text">
							We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens
						</p>
						<a className="button" href="#sign-up">Sing up now</a>
					</div>
				</div>
				
			</div>
		</section>
	)
}

export default Banner;