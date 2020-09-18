import React from 'react';
import ReactTooltip from 'react-tooltip';
import User from './components/user';

//import Photo from './photo.jpg';

const Users = () => {

  const usersDB = [
    {
      id: 1,
      photo: "https://frontend-test-assignment-api.abz.agency/images/users/5e54ff59e5a4548.jpeg",
      name: "Maximillian",
      job: "Leading specialist of the Control Department",
      mail: "controldepartment@gmail",
      phone: "+380 50 678 03 24"
    },
    {
      id: 2,
      photo: "https://frontend-test-assignment-api.abz.agency/images/users/5e54ff59e5a4548.jpeg",
      name: "Adolph Blaine Charles David Earl Matthew Matthew",
      job: "Contextual advertising specialist",
      mail: "adolph.blainecharles@gmail.com",
      phone: "+380 50 678 03 24"
    },
    {
      id: 3,
      photo: "https://frontend-test-assignment-api.abz.agency/images/users/5e54ff59e5a4548.jpeg",
      name: "Adolph Blaine Charles David Earl Matthew Matthew",
      job: "Contextual advertising specialist",
      mail: "adolph.blainecharles@gmail.com",
      phone: "+380 50 678 03 24"
    },
    {
      id: 4,
      photo: "https://frontend-test-assignment-api.abz.agency/images/users/5e54ff59e5a4548.jpeg",
      name: "Adolph Blaine Charles David Earl Matthew Matthew",
      job: "Contextual advertising specialist",
      mail: "adolph.blainecharles@gmail.com",
      phone: "+380 50 678 03 24"
    }
  ];

  const users = usersDB.map(({id, ...userInfo}) => <User key={id} {...userInfo} />);

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
        <ReactTooltip place="bottom" />
          {users}
        </div>

			</div>
		</section>
		)
}

export default Users;
