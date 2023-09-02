import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'utils/constanst';

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
			localStorage.setItem(ACCESS_TOKEN, action.payload.access);
			localStorage.setItem(REFRESH_TOKEN, action.payload.refresh);
		},
		logout(state) {
			state.isAuth = false;
			state.user = null;
		},
	},
});

export const { login, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
