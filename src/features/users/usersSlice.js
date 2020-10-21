import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [{
            id: 1,
            photo: "https://frontend-test-assignment-api.abz.agency/images/users/5e54ff59e5a4548.jpeg",
            name: "MaximillianRedux",
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
        },
        {
            id: 5,
            photo: "https://frontend-test-assignment-api.abz.agency/images/users/5e54ff59e5a4548.jpeg",
            name: "Adolph Blaine Charles David Earl Matthew Matthew",
            job: "Contextual advertising specialist",
            mail: "adolph.blainecharles@gmail.com",
            phone: "+380 50 678 03 24"
        }
        ],
        isError: false,
        isLoading: false
    },
    reducers: {
        setError: (state, action) => {
            state.isError = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        }
    },
});

export const {setError, setLoading, setData} = usersSlice.actions;

export const selectUsers = state => state.users.users;
export const selectError = state => state.users.isError;
export const selectLoading = state => state.users.isLoading;

export default usersSlice.reducer;