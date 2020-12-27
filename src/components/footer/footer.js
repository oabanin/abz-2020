import React from 'react';

import './footer.scss';

const Footer = () => {

	return (
		<footer className="footer">
			<hr />
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4 offset-md-4">
						<div className="footer__copyright">© abz.agency specially for the test task</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;