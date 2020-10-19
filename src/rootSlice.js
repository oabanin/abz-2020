import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    status: 'idle',
    users: [],
  },
  reducers: {
    fetchUsers : (state) => state.users = [user: "vasya"],
  },
})

console.log(usersSlice);

export const { fetchUsers } = usersSlice.actions
export default usersSlice.reducer
