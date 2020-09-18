import React, { useEffect, useRef, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import User from './components/user';

import Photo from './photo.jpg';

const Users = () => {
  const users = [
    {
      id: 1,
      photo: "https:\//frontend-test-assignment-api.abz.agency/images/users/5e54ff59e5a4548.jpeg",
      name: "Maximillian",
      job: "Leading specialist of the Control Department",
      mail: "controldepartment@gmail",
      phone: "+380 50 678 03 24"
    }
  ];






  // useEffect(() => {
  //   compareSize();
  // }, []);

  // const anode = useRef();

  // const [isInvisible, setInvisibility] = useState(true);

  // const compareSize = () => {
  //   const compare =
  //     anode.current.scrollWidth > anode.current.clientWidth;
  //   console.log('compare: ', compare);
  //   setInvisibility(!compare);
  // };

  // console.log(anode);
  //compareSize();

	return (
		<section className="users">
      <ReactTooltip place="bottom" />
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

        </div>

			</div>
		</section>
		)
}

export default Users;

 // <div className="col-md-4">
 //            <img className="users__photo" src={Photo}/>
 //            <div className="users__info">
 //              <h2 className="users__name">Maximillian</h2>
 //              <div className="users__job">Leading specialist of the Control Department</div>

 //              <a data-tip="controldepartment@gmail" className="users__email" href="mailto:controldepartment@gmail">controldepartment@gmail</a>
 //              <div className="users__phone">+380 50 678 03 24</div>
 //            </div>
 //          </div>
 //          <div className="col-md-4">
 //            <img className="users__photo" src={Photo}/>
 //            <div className="users__info">
 //              <h2 className="users__name">Adolph Blaine Charles David Earl Matthew Matthew</h2>
 //              <div className="users__job">Contextual advertising specialist</div>

 //              <a ref={anode} data-tip-disable={isInvisible} data-tip="adolph.blainecharles@gmail.com" className="users__email" href="mailto:adolph.blainecharles@gmail.com">adolph.blainecharles@gmail.com</a>
 //              <div className="users__phone">+380 50 678 03 24</div>
 //            </div>
 //          </div>
 //          <div className="col-md-4">
 //            <img className="users__photo" src={Photo}/>
 //          </div>
