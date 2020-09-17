import React, { useEffect, useRef, useState } from 'react';
import ReactTooltip from 'react-tooltip';

import Photo from './photo.jpg';

const Users = () => {
  const node = useRef();
  const [isVisible, setState] = useState(false);
  const handleClick = ({ target }) => {
      if (node.current.contains(target)) {
          // inside click
          return;
      }
      // outside click
      setState(false);
  };
  
	return (
		<section className="users">
      
      <p style={{"border": "1px solid green"}} ref={node.current} data-tip=''>ssssssss</p>
      <button onClick={() => { ReactTooltip.hide(node.current) }}>ddddddddddddddddd</button>
      <ReactTooltip place="bottom"  />


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
              <h2 className="users__name">Maximillian</h2>
              <div className="users__job">Leading specialist of the Control Department</div>
              <ReactTooltip place="bottom" />

              <a data-tip="controldepartment@gmail" className="users__email" href="mailto:controldepartment@gmail">controldepartment@gmail</a>
              <div className="users__phone">+380 50 678 03 24</div>
            </div>
          </div>
          <div className="col-md-4">
            <img className="users__photo" src={Photo}/>
            <div className="users__info">
              <h2 className="users__name">Adolph Blaine Charles David Earl Matthew Matthew</h2>
              <div className="users__job">Contextual advertising specialist</div>
              
              <a data-tip="adolph.blainecharles@gmail.com" className="users__email" href="mailto:adolph.blainecharles@gmail.com">adolph.blainecharles@gmail.com</a>
              <div className="users__phone">+380 50 678 03 24</div>
            </div>
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
