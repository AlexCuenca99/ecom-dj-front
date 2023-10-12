import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApiSlice = createApi({
	reducerPath: 'cartApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.REACT_APP_BASE_API_URL}/api/v1/`,
		prepareHeaders: (headers) => {
			headers.set('Content-Type', 'application/json');
			headers.set('Accept', 'application/json');
			return headers;
		},
	}),
	tagTypes: ['Cart'],
	endpoints: (builder) => ({
		listCartItems: builder.query({
			query({ cart_id = '' }) {
				return {
					url: `carts/${cart_id}/items/`,
					method: 'GET',
				};
			},
		}),
	}),
});

export const { useListCartItemsQuery } = cartApiSlice;
