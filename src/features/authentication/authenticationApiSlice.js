import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authenticationApiSlice = createApi({
	reducerPath: 'authenticationApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.REACT_APP_BASE_API_URL}/api/v1/jwt/`,
		prepareHeaders(headers) {
			headers.set('Content-Type', 'application/json');
			headers.set('Accept', 'application/json');
			return headers;
		},
	}),
	tagTypes: ['Jwt'],
	endpoints: (builder) => ({
		signIn: builder.mutation({
			query(body) {
				return {
					url: 'create/',
					method: 'POST',
					body: JSON.stringify(body),
				};
			},
		}),
		verify: builder.mutation({
			query(body) {
				return {
					url: 'verify/',
					method: 'POST',
					body: JSON.stringify(body),
				};
			},
		}),
	}),
});

export const { useSignInMutation, useVerifyMutation } = authenticationApiSlice;
