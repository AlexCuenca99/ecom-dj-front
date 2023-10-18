import { createSlice } from '@reduxjs/toolkit';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'utils/constanst';

const initialState = { isAuth: false, user: null, tokens: [] };

const authenticationSlice = createSlice({
	name: 'authentication',
	initialState,
	reducers: {
		login(state, action) {
			// Set tokens in local storage
			action.payload?.access &&
				localStorage.setItem(ACCESS_TOKEN, action.payload.access);
			action.payload?.refresh &&
				localStorage.setItem(REFRESH_TOKEN, action.payload.refresh);

			state.isAuth = true;
			state.user = {
				first_name: action.payload.first_name,
				last_name: action.payload.last_name,
				gender: action.payload.gender,
				birth: action.payload.birth,
				email: action.payload.email,
				cart_id: action.payload.cart_id,
			};
			state.tokens = [
				{
					access: localStorage.getItem(ACCESS_TOKEN),
					refresh: localStorage.getItem(ACCESS_TOKEN),
				},
			];
		},
		logout(state) {
			// Set tokens in local storage
			localStorage.removeItem(ACCESS_TOKEN);
			localStorage.removeItem(REFRESH_TOKEN);

			state.isAuth = false;
			state.user = null;
			state.tokens = [];
		},
	},
});

export const { login, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
