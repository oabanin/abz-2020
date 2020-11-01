import { createSlice } from '@reduxjs/toolkit';

import { getUsers, getResourse } from '../../services/api';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        nextUrl: null,
        error: null,
        isFirstLoading: false,
        isNextLoading: false
    },
    reducers: {
        startLoading: state => {
            state.isFirstLoading = true;
        },
        usersSuccess: (state, action) => {
            state.users = action.payload.users;
            state.nextUrl = action.payload.links.next_url;
            state.isFirstLoading = false;
        },
        usersError: (state, action) => {
            state.isFirstLoading = false;
            state.error = action.payload;
        },
        startNextLoading: state => {
            state.isNextLoading = true;
        },


        setNextLoading: (state, action) => {
            state.isNextLoading = action.payload;
        },
        setNextUrl: (state, action) => {
            state.nextUrl = action.payload;
        },

        addUsers: (state, action) => {
            state.users.push(action.payload);
        }
    },
});

const { startLoading, usersSuccess, setError, setFirstLoading, setNextLoading, setUsers, setNextUrl } = usersSlice.actions;

export const fetchUsers = () => async (dispatch) => {
    dispatch(startLoading());
    try {
        const { data } = await getUsers();
        dispatch(usersSuccess(data));
    }
    catch (error) {
        dispatch(usersError(error.message));
    }
};

export const fetchMoreUsers = () => async (dispatch, getState) => {
    dispatch(startNextLoading());
    try {
        const { data } = await getUsers();
        dispatch(usersSuccess(data));
    }
    catch (error) {
        dispatch(usersError(error.message));
    }
    console.log(getState().users.nextUrl);
};

// export const usersRequested = () => {
//     dispatch(setFirstLoading(true));
//     dispatch(setUsers([]));
//     dispatch(setError(null));
// }

export const selectUsers = state => state.users.users;
export const selectError = state => state.users.error;
export const selectFirstLoading = state => state.users.isFirstLoading;
export const selectNextLoading = state => state.users.isNextLoading;
export const selectNextUrl = state => state.users.nextUrl;

export default usersSlice.reducer;
