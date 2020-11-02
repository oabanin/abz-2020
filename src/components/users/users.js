import React, { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { useSelector, useDispatch} from "react-redux";

import User from './components/user';
import Spinner from "../spinner";

//import Photo from './photo.jpg';

import {
  selectError,
  selectLoading,
  selectNextUrl,
  selectUsers,
  fetchUsers,
  fetchMoreUsers
} from '../../features/users/usersSlice';

const Users = () => {

  useEffect(()=>{
    dispatch(fetchUsers());
  },[])

  const dispatch = useDispatch();
  
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectLoading);
  const nextUrl = useSelector(selectNextUrl);
  const isError = useSelector(selectError);

  const userList = users.map(({ id, ...userInfo }) => <User key={id} {...userInfo} />);

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
        {isLoading && <Spinner />}
        {isError && isError}
        {nextUrl && 
          <div className="row">
            <div className="col-md-4 offset-md-4 text-center">
              <button 
              className="button" 
              onClick={()=>dispatch(fetchMoreUsers())}
              disabled={isLoading}
              >Show more</button>

            </div>
        </div>
        }

      </div>

    </section>
  )
}

export default Users;
