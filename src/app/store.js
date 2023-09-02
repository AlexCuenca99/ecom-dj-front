import { configureStore } from '@reduxjs/toolkit';

import authenticationReducer from 'features/authentication/authenticationSlice';
import { authenticationApiSlice } from 'features/authentication/authenticationApiSlice';
import { userApiSlice } from 'features/authentication/usersApiSlice';

export default configureStore({
	reducer: {
		authentication: authenticationReducer,
		[authenticationApiSlice.reducerPath]: authenticationApiSlice.reducer,
		[userApiSlice.reducerPath]: userApiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware()
			.concat(authenticationApiSlice.middleware)
			.concat(userApiSlice.middleware);
	},
});
