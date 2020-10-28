import { createSlice } from '@reduxjs/toolkit';

import { getResourse } from '../../services/api';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        usersError: null,
        isLoading: true
    },
    reducers: {
        setError: (state, action) => {
            state.usersError = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        }
    },
});

const {setError, setLoading} = usersSlice.actions;

export const {setUsers} = usersSlice.actions;

export const fetchUsers = url => async (dispatch) => {

    try {
      const { data } = await getResourse(url);
      dispatch(setLoading(false));
      dispatch(setUsers(data.users));

    }
    catch (error) {
      dispatch(setError(error));
    }

};

export const usersRequested = () => {
    dispatch(setLoading(true));
    dispatch(setUsers([]));
    dispatch(setError(null));
}

export const selectUsers = state => state.users.users;
export const selectError = state => state.users.usersError;
export const selectLoading = state => state.users.isLoading;

export default usersSlice.reducer;
