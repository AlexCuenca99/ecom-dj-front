import { flatMap } from 'lodash';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApiSlice = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.REACT_APP_BASE_API_URL}/api/v1/`,
		prepareHeaders(headers) {
			headers.set('Content-Type', 'application/json');
			headers.set('Accept', 'application/json');
			return headers;
		},
	}),
	tagTypes: ['User'],
	endpoints: (builder) => ({
		addUser: builder.mutation({
			query(body) {
				return {
					url: 'users/',
					method: 'POST',
					body: JSON.stringify(body),
				};
			},
			transformErrorResponse: (response, meta, arg) => {
				return flatMap(response.data, (value) => value);
			},
		}),
		activateAccount: builder.mutation({
			query(body) {
				return {
					url: 'users/activation/',
					method: 'POST',
					body: JSON.stringify(body),
				};
			},
		}),
		getMe: builder.mutation({
			query(token) {
				return {
					url: 'users/me/',
					method: 'GET',
					headers: {
						Authorization: `Bearer ${token}`,
					},
				};
			},
		}),
		resetPassword: builder.mutation({
			query(body) {
				return {
					url: 'users/reset_password/',
					method: 'POST',
					body: JSON.stringify(body),
				};
			},
			transformErrorResponse: (response, meta, arg) => {
				return flatMap(response.data, (value) => value);
			},
		}),
		resetPasswordConfirm: builder.mutation({
			query(body) {
				return {
					url: 'users/reset_password_confirm/',
					method: 'POST',
					body: JSON.stringify(body),
				};
			},
			transformErrorResponse: (response, meta, arg) => {
				return flatMap(response.data, (value) => value);
			},
		}),
	}),
});

export const {
	useAddUserMutation,
	useActivateAccountMutation,
	useGetMeMutation,
	useResetPasswordMutation,
	useResetPasswordConfirmMutation,
} = userApiSlice;
