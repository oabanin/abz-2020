import React, { useEffect, useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import { useSelector, useDispatch } from "react-redux";

import User from './components/user';
import Spinner from "../spinner";
import ApiContext from '../api-service-context';

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

  const { getUsers, getUrl } = useContext(ApiContext);

  useEffect(() => {
    dispatch(fetchUsers(getUsers));
  }, [])

  const dispatch = useDispatch();


  const users = [
    { "id": 1, "name": "Maximillian", "email": "controldepartment@gmail", "phone": "+380506780324", "position": "Leading Specialist of the Control Department", "position_id": 2, "registration_timestamp": 1604494937, "photo": "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a6596d3bb1.jpeg" },
    { "id": 2, "name": "Adolph Blaine Charles David Earl Matthew Matthew", "email": "adolph.blainecharles@gmail.com", "phone": "+380506780324", "position": "Contextual advertising specialist", "position_id": 3, "registration_timestamp": 1604494937, "photo": "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a6596f0072.jpeg" },
    { "id": 3, "name": "Elizabeth", "email": "elisabet.front@gmail.com", "phone": "+380506780324", "position": "Frontend developer", "position_id": 3, "registration_timestamp": 1604494937, "photo": "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a659709143.jpeg" },
    { "id": 4, "name": "Alexander Jayden", "email": "ozella.block@wiza.com", "phone": "+380506780324", "position": "Backend developer", "position_id": 4, "registration_timestamp": 1604494937, "photo": "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a65971a714.jpeg" },
    { "id": 5, "name": "Noah", "email": "noah1998@gmail.com", "phone": "+380506780324", "position": "QA", "position_id": 4, "registration_timestamp": 1604494937, "photo": "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a65972a8f5.jpeg" },
    { "id": 6, "name": "Liamgrievescasey Smith Wiam", "email": "liamgrievescasey.smith@gmail.com", "phone": "+380506780324", "position": "Lead designer", "position_id": 1, "registration_timestamp": 1604494937, "photo": "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a65973cf06.jpeg" }];
  //const users = useSelector(selectUsers);
  const isLoading = useSelector(selectLoading);
  const nextUrl = useSelector(selectNextUrl);
  const isError = useSelector(selectError);

  useEffect(() => {
    ReactTooltip.rebuild();
  }, [users]);

  const userList = users.map(({ id, ...userInfo }) => <User key={id} {...userInfo} />);

  return (
    <section className="users">
      <div className="container-fluid">

        <div className="row" id="users">
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
          <ReactTooltip className="tooltip" place="bottom" offset={{ top: -10 }} />
          {userList}
        </div>
        {isLoading && <Spinner />}
        {isError && isError}
        {nextUrl &&
          <div className="row">
            <div className="col-md-4 offset-md-4 text-center">
              <button
                className="button"
                onClick={() => dispatch(fetchMoreUsers(getUrl))}
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
