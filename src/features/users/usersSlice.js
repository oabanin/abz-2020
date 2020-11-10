import { createSlice } from '@reduxjs/toolkit';

//import axios from 'axios';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        nextUrl: null,
        error: null,
        isLoading: false,
    },
    reducers: {
        startLoading: state => {
            state.isLoading = true;
        },
        usersSuccess: (state, action) => {
            state.users = action.payload.users;
            state.nextUrl = action.payload.links.next_url;
            state.isLoading = false;
        },
        usersError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        usersAddMore: (state, action) => {
            state.isLoading = false;
            state.users.push(...action.payload.users);
            state.nextUrl = action.payload.links.next_url;
        }
    },
});

const { startLoading, usersSuccess, usersAddMore, usersError} = usersSlice.actions;

export const fetchUsers = (getUsers) => async (dispatch) => {
    dispatch(startLoading());
    try {
        const { data } = await getUsers();
        dispatch(usersSuccess(data));
    }
    catch (error) {
        dispatch(usersError(error.message));
    }
};

export const fetchMoreUsers = (getUrl) => async (dispatch, getState) => {
    dispatch(startLoading());
    try {
        const { data } = await getUrl(getState().users.nextUrl);
        dispatch(usersAddMore(data));
    }
    catch (error) {
        dispatch(usersError(error.message));
    }

};

// export const usersRequested = () => {
//     dispatch(setFirstLoading(true));
//     dispatch(setUsers([]));
//     dispatch(setError(null));
// }

export const selectUsers = state => state.users.users;
export const selectError = state => state.users.error;
export const selectLoading = state => state.users.isLoading;
export const selectNextUrl = state => state.users.nextUrl;

export default usersSlice.reducer;
