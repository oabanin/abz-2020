import React, { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import User from './components/user';
import Spinner from "../spinner";


//import Photo from './photo.jpg';

import {
  selectError,
  selectLoading,
  selectUsers,
  fetchUsers
} from '../../features/users/usersSlice';

import { useSelector, useDispatch } from "react-redux";

const Users = () => {

  useEffect(()=>{
    dispatch(fetchUsers('/users?page=1&count=6'));
  },[])

  const dispatch = useDispatch();
  
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  if(isLoading) return <Spinner />;
  if(isError) return "Error";

  const userList = users.map(({ id, ...userInfo }) => <User key={id} {...userInfo} />);
3
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
