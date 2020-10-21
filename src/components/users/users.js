import React from 'react';
import ReactTooltip from 'react-tooltip';
import User from './components/user';

//import Photo from './photo.jpg';

import {
  setError,
  setLoading,
  setUsers,
  selectError, 
  selectLoading,
  selectUsers,   
} from '../../features/users/usersSlice';

import { useSelector, useDispatch } from "react-redux";



const Users = () => {

  const dispatch = useDispatch();
  const usersFromStore = useSelector(selectUsers);

  const userList = usersFromStore.map(({ id, ...userInfo }) => <User key={id} {...userInfo} />);

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

        <div className="row mb-35">
          <ReactTooltip className="tooltip" place="bottom" offset={{top: -10}} />
          {userList}
        </div>

        <div className="row">
          <div className="col-md-4 offset-md-4 text-center">
            <a className="button" href="#sign-up">Show more</a>

          </div>
        </div>

      </div>
      
    </section>
  )
}

export default Users;
