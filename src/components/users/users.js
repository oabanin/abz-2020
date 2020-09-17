import React from 'react';
import ReactTooltip from 'react-tooltip';

import Photo from './photo.jpg';

const Users = () => {
	return (
		<section className="users">
			<div className="container-fluid">

				<div className="row">
					<div className="col-md-8 offset-md-2">
						<h1 className="users__title">Our cheerful users</h1>
					</div>
				</div>

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <p className="users__subtitle">Attention! Sorting users by registration date</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <img className="users__photo" src={Photo}/>
            <div className="users__info">
              <h2 className="users__name">Adolph Blaine Charles David Earl Matthew Matthew</h2>
              <div className="users__job">Leading specialist of the Control Department</div>
              <ReactTooltip />
              <a data-tip="liamgrievescasey.smith@gmail.com" className="users__email" href="mailto:liamgrievescasey.smith@gmail.com">liamgrievescasey.smith@gmail.com</a>
              <div className="users__phone">+380 50 678 03 24</div>
            </div>
          </div>
          <div className="col-md-4">
            <img className="users__photo" src={Photo}/>
          </div>
          <div className="col-md-4">
            <img className="users__photo" src={Photo}/>
          </div>
        </div>

			</div>
		</section>
		)
}

export default Users;
