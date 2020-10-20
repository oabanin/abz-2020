import * as types from '../constants/ActionTypes';

export const fetchUsers = users => ({ type: types.FETCH_USERS, users })