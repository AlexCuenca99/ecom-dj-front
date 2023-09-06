import { configureStore } from '@reduxjs/toolkit';

import authenticationReducer from 'features/authentication/authenticationSlice';
import { userApiSlice } from 'features/authentication/usersApiSlice';
import { authenticationApiSlice } from 'features/authentication/authenticationApiSlice';
import { categoryApiSlice } from 'features/categories/redux/categoriesApiSlice';

export default configureStore({
	reducer: {
		authentication: authenticationReducer,
		[authenticationApiSlice.reducerPath]: authenticationApiSlice.reducer,
		[userApiSlice.reducerPath]: userApiSlice.reducer,
		[categoryApiSlice.reducerPath]: categoryApiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware()
			.concat(authenticationApiSlice.middleware)
			.concat(userApiSlice.middleware)
			.concat(categoryApiSlice.middleware);
	},
});
