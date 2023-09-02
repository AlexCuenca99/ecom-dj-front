import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = { isAuth: false, user: null };

const authenticationSlice = createSlice({
	name: 'authentication',
	initialState,
	reducers: {
		login(state, action) {
			state.isAuth = true;
			state.user = {
				first_name: action.payload.first_name,
				last_name: action.payload.last_name,
				gender: action.payload.gender,
				birth: action.payload.birth,
				email: action.payload.email,
			};
		},
		logout(state) {
			state.isAuth = false;
			state.user = null;
		},
	},
});

export const { login, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
