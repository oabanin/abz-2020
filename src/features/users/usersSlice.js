import { createSlice } from '@reduxjs/toolkit';

import { getResourse } from '../../services/api';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        isError: false,
        isLoading: true
    },
    reducers: {
        setError: (state, action) => {
            state.isError = action.payload;
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
      dispatch(setError(true));
    }

};

export const usersRequested = () => {
    dispatch(setLoading(true));
    dispatch(setUsers([]));
    dispatch(setError(false));
}

export const selectUsers = state => state.users.users;
export const selectError = state => state.users.isError;
export const selectLoading = state => state.users.isLoading;

export default usersSlice.reducer;
